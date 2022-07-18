import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  company: string;
  type: string;
  task: string;
  date: string;
  time: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Rayan', company: 'xero', type: 'bookkeeping' ,date: '11/11/2022', time:'10:20', task:'task here'},
  {id: 2, name: 'David', company: 'xero', type: 'vat' , date:  '11/11/2022', time:'10:20', task:'task here'},
  {id: 3, name: 'Tariq', company: 'xero', type: 'bookkeeping' , date:  '11/11/2022', time:'10:20', task:'task here'},
  {id: 4, name: 'Rizwan', company: 'xero', type: 'bookkeeping' , date:  '11/11/2022', time:'10:20', task:'task here'},
  {id: 5, name: 'Shital', company: 'xero', type: 'self assesmen' , date:  '11/11/2022', time:'10:20', task:'task here'},
];

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  displayedColumns: string[] = ['username','company', 'taskType', 'task', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
