import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { CompletedLog, SalesflowUser, TaskListItems } from './data';

@Injectable({
  providedIn: 'root'
})

export class TasksMockApi {

  constructor(private api: HttpClient) {  }

  getTaskList(params) {
    return this.api.post<TaskListItems[]>(`${environment.baseUrl}/tasks_definitions`, params);
  }

  updateTaskStatus(taskParam) {
    return this.api.post<TaskListItems>(`${environment.baseUrl}/task_status`, taskParam);
  }

  userList(user) {
    return this.api.post<SalesflowUser[]>(`${environment.baseUrl}/users-list`, user);
  }

  taskCompletedLog(params) {
    return this.api.post<CompletedLog[]>(`${environment.baseUrl}/tasks_log`, params);
  }
}
