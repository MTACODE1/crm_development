import { Component, OnInit } from '@angular/core';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { CompletedLog, SalesflowUser } from 'app/mock-api/apps/tasks/data';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  displayedColumns: string[] = ['username','company', 'taskType', 'task', 'date', 'time'];
  logList: CompletedLog[] = [];
  totalLogCount: number;
  public users: SalesflowUser[] = [];

  public paginationConfig = {
    limit: 10,
    offset: 0,
  }
  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private taskService: TasksMockApi) { }

  ngOnInit(): void {
    this.getUserList();
    this.getTaskList();
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

  private getTaskList(): void {
    const params = {
      ...this.paginationConfig
    }
    this.taskService.taskCompletedLog(params).pipe(takeUntil(this.destroyer$)).subscribe(completedList => {
      this.logList = completedList['rows'];
      this.totalLogCount = completedList['total_count'];
    })
  }

  public onPageChange(event): void {
    this.paginationConfig = { ...this.paginationConfig, ...event };
    this.getTaskList();
  }

 
}
