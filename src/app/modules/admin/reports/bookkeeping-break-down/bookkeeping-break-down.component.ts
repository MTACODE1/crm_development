import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  sent: number;
  req: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Rayan', weight: 0, sent: 0 ,req: 10},
  {id: 2, name: 'David', weight: 1, sent: 4 , req: 30},
  {id: 3, name: 'Tariq', weight: 3, sent: 5 , req: 0},
  {id: 4, name: 'Rizwan', weight: 2, sent: 0 , req: 67},
  {id: 5, name: 'Shital', weight: 0, sent: 0 , req: 4},
];

@Component({
  selector: 'app-bookkeeping-break-down',
  templateUrl: './bookkeeping-break-down.component.html',
  styleUrls: ['./bookkeeping-break-down.component.scss']
})
export class BookkeepingBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant','complete', 'sentClient', 'review', 'createMr', 'querySent', 'queryRequest', 'wip', 'informationsent', 'informationRequest', 'start', 'total', 'check'];
  displayedFooter: string[] = ['accountantf','completef', 'sentClientf', 'reviewf', 'createMrf', 'querySentf', 'queryRequestf', 'wipf', 'informationsentf', 'informationRequestf', 'startf','emptyFooter','emptyFooter'];
  displayedFooter2: string[] = ['title','stage4','stage3', 'emptyFooter', 'emptyFooter', 'stage2', 'emptyFooter', 'emptyFooter', 'emptyFooter', 'stage1'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
   
  }

}
