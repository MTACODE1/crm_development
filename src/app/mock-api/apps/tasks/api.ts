import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { TaskListItems } from './data';

@Injectable({
  providedIn: 'root'
})

export class TasksMockApi {

  constructor(private api: HttpClient) {  }

  getTaskList(params) {
    return this.api.post<TaskListItems[]>(`${environment.baseUrl}/tasks_definitions`, params);
  }
}
