import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  accountant: string;
  id: number;
  live: number;
  suspended: number;
  total: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, accountant: 'Rayan', live: 50, suspended: 2 ,total: 52,},
  {id: 2, accountant: 'David', live: 40, suspended: 2 , total: 42 },
];
const MANAGEMENT_DATA: PeriodicElement[] = [
  {id: 1, accountant: 'Akkil', live: 80, suspended: 5 ,total: 85,},
  {id: 2, accountant: 'Ethisham', live: 50, suspended: 2 , total: 48 },
];

@Component({
  selector: 'app-accountant-client',
  templateUrl: './accountant-client.component.html',
  styleUrls: ['./accountant-client.component.scss']
})
export class AccountantClientComponent implements OnInit {
  displayedColumns: string[] = ['accountant','live', 'suspended', 'total'];
  managementColumns: string[] = ['management','mlive', 'msuspended', 'mtotal'];
  endofyearColumns: string[] = ['eaccountant','elive', 'esuspended', 'etotal'];
  dataSource = ELEMENT_DATA;
  managementData = MANAGEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
