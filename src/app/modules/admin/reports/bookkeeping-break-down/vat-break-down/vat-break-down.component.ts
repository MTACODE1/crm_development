import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VatBreakdown } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { values } from 'lodash';
import moment from 'moment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vat-break-down',
  templateUrl: './vat-break-down.component.html',
  styleUrls: ['./vat-break-down.component.scss']
})
export class VatBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book', 'total'];

  vatBreakDownList: VatBreakdown[] = [];
  date = new FormControl(moment());

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.getVatBreakdownList();
  }

  public calculateTotal(type) {

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

  private getVatBreakdownList() {
    const params = {
      month: this.date.value.format('MMM-yy'),
    }
    this.reportService.getBreakdownData(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.vatBreakDownList = listResponse['vat_breakdown']
    })
  }

  calculation() {
    const data = this.vatBreakDownList.map(item => ({
      filed: item.filed,
      vatsent: item.vat_sent_client,
      vatreview: item.vat_review_accountant,
      sentaccountant: item.vat_sent_accountant,
      bookkeepstage: item.bookkeeping_stage,
    }))
    return VatBreakDownComponent.sum(data[0]);

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
