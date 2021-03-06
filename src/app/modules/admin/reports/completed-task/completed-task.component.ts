import { Component, OnInit } from '@angular/core';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { CompletedLog, SalesflowUser, taskType } from 'app/mock-api/apps/tasks/data';
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
  userTerm: string;
  searchTerm: string;
  public users: SalesflowUser[] = [];
  public ProcessTypeEnum = taskType;

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
      params['user'] = additionalParams.user;
    }
    this.taskService.taskCompletedLog(params).pipe(takeUntil(this.destroyer$)).subscribe(completedList => {
      this.logList = completedList['rows'];
      this.totalLogCount = completedList['total_count'];
    })
  }

  public onPageChange(event): void {
    const params = {
      ...this.paginationConfig,
      ...event,
      user: this.userTerm,
    }
    console.log(params);
    this.taskService.taskCompletedLog(params).subscribe(response => {
      this.logList = response['rows'];
    });
  }

  public statusFilter(item) {
    const params = { status: item }
    this.getTaskList(params);
  }

  public onClientChange(event) {
    const params = { user: event.value }
    this.getTaskList(params);
  }
}
