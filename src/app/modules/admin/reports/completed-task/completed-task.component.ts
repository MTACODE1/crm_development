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
  displayedColumns: string[] = ['username', 'company', 'taskType', 'task', 'date', 'time'];
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
    this.getTaskList({});
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

  private getTaskList(additionalParams): void {
    const params = {
      ...this.paginationConfig
    }
    if (additionalParams && additionalParams.status) {
      params['process'] = additionalParams.status;
    }
    if (additionalParams && additionalParams.user) {
      params['users'] = additionalParams.user;
    }
    this.taskService.taskCompletedLog(params).pipe(takeUntil(this.destroyer$)).subscribe(completedList => {
      this.logList = completedList['rows'];
      this.totalLogCount = completedList['total_count'];
    })
  }

  public onPageChange(event): void {
    this.paginationConfig = { ...this.paginationConfig, ...event };
    this.getTaskList({});
  }

  public statusFilter(item) {
    const param = { status: item }
    this.getTaskList(param);
  }

  public onClientChange(event) {
    const param = { user: event.value }
    this.getTaskList(param);
  }
}
