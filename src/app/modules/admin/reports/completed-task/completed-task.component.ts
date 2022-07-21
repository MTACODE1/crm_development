import { Component, OnInit } from '@angular/core';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { SalesflowUser } from 'app/mock-api/apps/tasks/data';
import { Subject, takeUntil } from 'rxjs';

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
  {id: 3, name: 'James', company: 'xero', type: 'bookkeeping' , date:  '11/11/2022', time:'10:20', task:'task here'},
  {id: 4, name: 'Rasmus', company: 'xero', type: 'account' , date:  '11/11/2022', time:'10:20', task:'task here'},
  {id: 5, name: 'Shital', company: 'xero', type: 'assessment' , date:  '11/11/2022', time:'10:20', task:'task here'},
];

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  displayedColumns: string[] = ['username','company', 'taskType', 'task', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  public users: SalesflowUser[] = [];
  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private taskService: TasksMockApi) { }

  ngOnInit(): void {
    this.getUserList();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private getUserList(): void {
    this.taskService.userList({}).pipe(takeUntil(this.destroyer$)).subscribe(response => {
      this.users = response;
    });
  }
}
