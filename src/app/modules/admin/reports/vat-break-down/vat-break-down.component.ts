import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  sent: number;
  req: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Rayan', weight: 0, sent: 0 ,req: 'H'},
  {id: 2, name: 'David', weight: 1, sent: 4 , req: 'He'},
  {id: 3, name: 'Tariq', weight: 3, sent: 5 , req: 'Li'},
  {id: 4, name: 'Rizwan', weight: 2, sent: 0 , req: 'Be'},
  {id: 5, name: 'Shital', weight: 0, sent: 0 , req: 'B'},
];

@Component({
  selector: 'app-vat-break-down',
  templateUrl: './vat-break-down.component.html',
  styleUrls: ['./vat-break-down.component.scss']
})
export class VatBreakDownComponent implements OnInit {
  displayedColumns: string[] = ['accountant','filed', 'sentClient', 'review', 'sentAccountant', 'book',  'total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
