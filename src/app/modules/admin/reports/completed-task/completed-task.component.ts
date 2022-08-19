import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { CompletedLog, SalesflowUser, taskType } from 'app/mock-api/apps/tasks/data';
import { PaginatorComponent } from 'app/shared/pagination/paginator/paginator.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  @ViewChild(PaginatorComponent , {static:false}) paginatorComponent:PaginatorComponent;
  displayedColumns: string[] = ['username', 'company', 'taskType', 'task', 'date', 'time'];
  logList: CompletedLog[] = [];
  userlist:[];
  totalLogCount: number;
  userTerm: string;
  public users: SalesflowUser[] = [];
  public ProcessTypeEnum = taskType;

  public paginationConfig = {
    limit: 10,
    offset: 0,
    page:1
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
   if(!this.userlist)
   {
    const params = {   
      ...this.paginationConfig,
      ...event,
      user: this.userTerm,
    }
    this.taskService.taskCompletedLog(params).subscribe(response => {
      this.logList = response['rows'];
    });
  }
    if(this.userlist){
      const params = {   
        ...this.paginationConfig,
        ...event,
        user: this.userTerm,
        process: this.userlist
      }
      this.taskService.taskCompletedLog(params).subscribe(response => {
        this.logList = response['rows'];
      });
     } 
  }

  public statusFilter(item) {
  this.paginatorComponent.page=1;
    const params = { status: item }
    this.userlist=item;
    this.getTaskList(params);
  }

  public onClientChange(event) {   
    this.paginatorComponent.page=1;
    const params = { user: event.value }
    this.getTaskList(params);
  }
}

