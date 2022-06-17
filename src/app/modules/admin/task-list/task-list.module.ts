import { InlineSVGModule } from 'ng-inline-svg';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations:[TaskListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    InlineSVGModule,
    MatButtonModule,
    TaskListRoutingModule
  ]
})
export class TaskListModule { }
