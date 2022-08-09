import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { BreakDown, IndividualStage, VatBreakdown } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { ViewBookkeepingDetailsComponent } from './view-bookkeeping-details/view-bookkeeping-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

@Component({
  selector: 'app-bookkeeping-break-down',
  templateUrl: './bookkeeping-break-down.component.html',
  styleUrls: ['./bookkeeping-break-down.component.scss']
})
export class BookkeepingBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'complete', 'sentClient', 'review', 'createMr', 'querySent', 'queryRequest', 'wip', 'informationsent', 'informationRequest', 'start', 'total'];
  displayedFooter: string[] = ['accountantf', 'completef', 'sentClientf', 'reviewf', 'createMrf', 'querySentf', 'queryRequestf', 'wipf', 'informationsentf', 'informationRequestf', 'startf', 'emptyFooter'];
  displayedFooter2: string[] = ['title', 'stage4', 'stage3', 'emptyFooter', 'emptyFooter', 'stage2', 'emptyFooter', 'emptyFooter', 'emptyFooter', 'stage1'];

  vatColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book', 'total'];

  individualColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book'];

  vatBreakDownList: VatBreakdown[] = [];
  breakdownList: BreakDown[] = [];
  individualStageList: IndividualStage[] = [];

  date = new FormControl(moment());

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private reportService: ReportsService, private router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getBreakdownDetails();
  }

  public calculateTotal(type) {
    if (type === 'mrComplete')
      return this.breakdownList.map(t => +t.mr_complete).reduce((acc, value) => acc + value, 0);
    if (type === 'mrSent')
      return this.breakdownList.map(t => +t.mr_sent_client).reduce((acc, value) => acc + value, 0);
    if (type === 'mrReviewed')
      return this.breakdownList.map(t => +t.mr_reviewed_accountant).reduce((acc, value) => acc + value, 0);
    if (type === 'mrBookkeeping')
      return this.breakdownList.map(t => +t.bookkeeping_create_mr).reduce((acc, value) => acc + value, 0);
    if (type === 'querySent')
      return this.breakdownList.map(t => +t.query_sent_client).reduce((acc, value) => acc + value, 0);
    if (type === 'queryRequested')
      return this.breakdownList.map(t => +t.queries_requested).reduce((acc, value) => acc + value, 0);
    if (type === 'wipBookkeeping')
      return this.breakdownList.map(t => +t.bookkeeping_wip).reduce((acc, value) => acc + value, 0);
    if (type === 'requestSent')
      return this.breakdownList.map(t => +t.request_sent_client).reduce((acc, value) => acc + value, 0);
    if (type === 'infoRequested')
      return this.breakdownList.map(t => +t.information_requested).reduce((acc, value) => acc + value, 0);
    if (type === 'bookkeepingStarted')
      return this.breakdownList.map(t => +t.bookkeeping_process_started).reduce((acc, value) => acc + value, 0);
    else {
      return this.breakdownList.map(t => +t.total).reduce((acc, value) => acc + value, 0);
    }
  }

  public calculateVatTotal(type) {
    if (type === 'filed')
      return this.vatBreakDownList.map(t => +t.filed).reduce((acc, value) => acc + value, 0);
    if (type === 'vatsent')
      return this.vatBreakDownList.map(t => +t.vat_sent_client).reduce((acc, value) => acc + value, 0);
    if (type === 'vatreview')
      return this.vatBreakDownList.map(t => +t.vat_review_accountant).reduce((acc, value) => acc + value, 0);
    if (type === 'sentaccountant')
      return this.vatBreakDownList.map(t => +t.vat_sent_accountant).reduce((acc, value) => acc + value, 0);
    if (type === 'bookkeepstage') {
      return this.vatBreakDownList.map(t => +t.bookkeeping_stage).reduce((acc, value) => acc + value, 0);
    }
    else {
      return this.vatBreakDownList.map(t => +t.total).reduce((acc, value) => acc + value, 0);
    }
  }

  public vatIndex(element,value,name){
    let data={
      title : null,
      count : null,
      clients : null
    };
    if(value === 'filed'){
      data.title = name,
      data.count = element.filed,
      data.clients = element.filed_clients
    }
    else if(value === 'sentClient'){
      data.title = name,
      data.count = element.vat_sent_client,
      data.clients = element.vat_sent_client_clients
    }
    else if(value === 'review'){
      data.title = name,
      data.count = element.vat_review_accountant,
      data.clients = element.vat_review_accountant_clients
    }
    else if(value === 'sentAccountant'){
      data.title = name,
      data.count = element.vat_sent_accountant,
      data.clients = element.vat_sent_accountant_clients
    }
    else {
      data.title = name,
      data.count = element.bookkeeping_stage,
      data.clients = element.bookkeeping_stage_clients
    }
    this.dialog.open(ViewDetailsComponent, {
      width: '30vw',
      data:data
    })
  }
  
  public bookkeepingIndex(element, value, name){
    let data={
      title: null,
      count : null,
      clients : null
    };
    if(value === 'complete'){
      data.title = name,
      data.count = element.mr_complete,
      data.clients = element.mr_complete_clients
    }
    else if(value === 'sentClient'){
      data.title = name,
      data.count = element.mr_sent_client,
      data.clients = element.mr_sent_client_clients
    }
    else if(value === 'review'){
      data.title = name,
      data.count = element.mr_reviewed_accountant,
      data.clients = element.mr_reviewed_accountant_clients
    }
    else if(value === 'createMr'){
      data.title = name,
      data.count = element.bookkeeping_create_mr,
      data.clients = element.bookkeeping_create_mr_clients
    }
    else if(value === 'querySent'){
      data.title = name,
      data.count = element.query_sent_client,
      data.clients = element.query_sent_client_clients
    }
    else if(value === 'queryRequest'){
      data.title = name,
      data.count = element.queries_requested,
      data.clients = element.queries_requested_clients
    }
    else if(value === 'wip'){
      data.title = name,
      data.count = element.bookkeeping_wip,
      data.clients = element.bookkeeping_wip_clients
    }
    else if(value === 'informationsent'){
      data.title = name,
      data.count = element.request_sent_client,
      data.clients = element.request_sent_client_clients
    }
    else if(value === 'informationRequest'){
      data.title = name,
      data.count = element.information_requested,
      data.clients = element.information_requested_clients
    }
    else {
      data.title = name,
      data.count = element.bookkeeping_process_started,
      data.clients = element.bookkeeping_process_started_clients
    }
    this.dialog.open(ViewBookkeepingDetailsComponent, {
      width: '30vw',
      data: data,
    })
  }

  private getBreakdownDetails() {
    const params = {
      month: this.date.value.format('MMM-yy'),
    }
    this.reportService.getBreakdownData(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.breakdownList = listResponse['bookkeeping'];
      this.vatBreakDownList = listResponse['vat_breakdown'];
      this.individualStageList = listResponse['individual_stage'];
    })
  }

  public chosenMonthHandler(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>): void {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.getBreakdownDetails();
  }

  public calculateMonth(value): void {
    value === 'decrement' ? this.date.setValue(this.date.value.subtract(1, 'month')) : this.date.setValue(this.date.value.add(1, 'month'));
    this.getBreakdownDetails();
  }
}