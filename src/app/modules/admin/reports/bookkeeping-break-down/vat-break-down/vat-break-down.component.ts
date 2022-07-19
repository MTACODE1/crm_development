import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  sent: number;
  req: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Rayan', weight: 0, sent: 0 ,req: 2},
  {id: 2, name: 'David', weight: 1, sent: 4 , req: 14.1},
  {id: 3, name: 'Tariq', weight: 3, sent: 5 , req: 3},
  {id: 4, name: 'Rizwan', weight: 2, sent: 0 , req: 0},
  {id: 5, name: 'Shital', weight: 3, sent: 6 , req: 0},
];

@Component({
  selector: 'app-vat-break-down',
  templateUrl: './vat-break-down.component.html',
  styleUrls: ['./vat-break-down.component.scss']
})
export class VatBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant','filed', 'sentClient', 'review', 'sentAccountant', 'book',  'total'];
  dataSource = ELEMENT_DATA;
  players = ELEMENT_DATA.slice();
  constructor() { }

  ngOnInit(): void {
  }

  public calculateTotal(type) {
    if(type === 'weight') {
      return this.players.reduce((accum, curr) => accum + curr.weight, 0);
    } else if(type === 'sent') {
      return this.players.reduce((accum, curr) => accum + curr.sent, 0);
    } else {
      return this.players.reduce((accum, curr) => accum + curr.req, 0);
    }
    
  }
}
