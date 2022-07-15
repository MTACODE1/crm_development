import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  sent: number;
  req: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Rayan', weight: 0.0, sent: 5.0 ,req: 37.5},
  {id: 2, name: 'David', weight: 3.1, sent: 3.4 , req: 5.5},
  {id: 3, name: 'Tariq', weight: 18.2, sent: 13.6 , req: 36.4},
  {id: 4, name: 'Rizwan', weight: 4.2, sent: 0.0 , req: 55.6},
  {id: 5, name: 'Shital', weight: 0.0, sent: 9.1 , req: 11.1},
];

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  displayedColumns: string[] = ['accountant','filed', 'sentClient', 'review', 'sentAccountant', 'book'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
