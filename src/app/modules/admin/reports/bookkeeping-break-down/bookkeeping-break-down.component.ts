import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakDown } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import moment from 'moment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-bookkeeping-break-down',
  templateUrl: './bookkeeping-break-down.component.html',
  styleUrls: ['./bookkeeping-break-down.component.scss']
})
export class BookkeepingBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'complete', 'sentClient', 'review', 'createMr', 'querySent', 'queryRequest', 'wip', 'informationsent', 'informationRequest', 'start', 'total', 'check'];
  displayedFooter: string[] = ['accountantf', 'completef', 'sentClientf', 'reviewf', 'createMrf', 'querySentf', 'queryRequestf', 'wipf', 'informationsentf', 'informationRequestf', 'startf', 'emptyFooter', 'emptyFooter'];
  displayedFooter2: string[] = ['title', 'stage4', 'stage3', 'emptyFooter', 'emptyFooter', 'stage2', 'emptyFooter', 'emptyFooter', 'emptyFooter', 'stage1'];

  breakdownList: BreakDown[] = [];
  date = new FormControl(moment());

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private reportService: ReportsService) { }

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

  private getBreakdownDetails() {
    const params = {
      month: this.date.value.format('MMM-yy'),
    }
    this.reportService.getBreakdownData(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.breakdownList = listResponse['bookkeeping'];
    })
  }

  calculation() {
    const data = this.breakdownList.map(item => ({
      mrComplete: item.mr_complete,
      mrSent: item.mr_sent_client,
      mrReviewed: item.mr_reviewed_accountant,
      mrBookkeeping: item.bookkeeping_create_mr,
      querySent: item.query_sent_client,
      queryRequested: item.queries_requested,
      wipBookkeeping: item.bookkeeping_wip,
      requestSent: item.request_sent_client,
      infoRequested: item.information_requested,
      bookkeepingStarted: item.bookkeeping_process_started,
    }))
    return BookkeepingBreakDownComponent.sum(data[0]);
  }

  private static sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }
}
