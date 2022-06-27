import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';


@NgModule({
  declarations:[TaskListComponent],
  imports: [
    SharedModule,
    MatIconModule,
    InlineSVGModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    TaskListRoutingModule
  ]
})
export class TaskListModule { }
