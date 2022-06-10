import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations:[TaskListComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    TaskListRoutingModule
  ]
})
export class TaskListModule { }
