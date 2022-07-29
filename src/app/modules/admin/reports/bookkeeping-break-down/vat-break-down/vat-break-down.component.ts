import { Component, OnInit } from '@angular/core';
import { VatBreakdown } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { values } from 'lodash';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vat-break-down',
  templateUrl: './vat-break-down.component.html',
  styleUrls: ['./vat-break-down.component.scss']
})
export class VatBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book', 'total'];

  vatBreakDownList: VatBreakdown[] = [];

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
    else {
      return this.vatBreakDownList.map(t => +t.bookkeeping_stage).reduce((acc, value) => acc + value, 0);
    }
  }

  private getVatBreakdownList() {
    this.reportService.getBreakdownData({}).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.vatBreakDownList = listResponse['vat_breakdown']
    })
  }

  calculation() {
   return this.vatBreakDownList.map(t => +t.total).reduce((acc, value) => acc + value, 0);
  }
}
