import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  sent: number;
  req: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Rayan', weight: 0, sent: 0, req: 10 },
  { id: 2, name: 'David', weight: 1, sent: 4, req: 30 },
  { id: 3, name: 'Tariq', weight: 3, sent: 5, req: 0 },
  { id: 4, name: 'Ram', weight: 2, sent: 0, req: 67 },
  { id: 5, name: 'Shital', weight: 0, sent: 0, req: 4 },
];

@Component({
  selector: 'app-bookkeeping-break-down',
  templateUrl: './bookkeeping-break-down.component.html',
  styleUrls: ['./bookkeeping-break-down.component.scss']
})
export class BookkeepingBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'complete', 'sentClient', 'review', 'createMr', 'querySent', 'queryRequest', 'wip', 'informationsent', 'informationRequest', 'start', 'total', 'check'];
  displayedFooter: string[] = ['accountantf', 'completef', 'sentClientf', 'reviewf', 'createMrf', 'querySentf', 'queryRequestf', 'wipf', 'informationsentf', 'informationRequestf', 'startf', 'emptyFooter', 'emptyFooter'];
  displayedFooter2: string[] = ['title', 'stage4', 'stage3', 'emptyFooter', 'emptyFooter', 'stage2', 'emptyFooter', 'emptyFooter', 'emptyFooter', 'stage1'];
  dataSource = ELEMENT_DATA;
  breakdownList: any;

  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.getBreakdownDetails();
  }

  public calculateTotal(type) {
    if (type === 'weight') {
      return this.dataSource.reduce((accum, curr) => accum + curr.weight, 0);
    } else if (type === 'sent') {
      return this.dataSource.reduce((accum, curr) => accum + curr.sent, 0);
    } else {
      return this.dataSource.reduce((accum, curr) => accum + curr.req, 0);
    }

  }

  private getBreakdownDetails() {
    this.reportService.getBreakdownData({}).subscribe(res =>{
      // this.breakdownList = res;
    })
  }
}
