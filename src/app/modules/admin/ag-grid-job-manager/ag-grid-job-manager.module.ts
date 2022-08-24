import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AgGridJobManagerRoutingModule } from './ag-grid-job-manager-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AgGridJobManagerComponent } from './ag-grid-job-manager.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [AgGridJobManagerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    AgGridJobManagerRoutingModule,
    AgGridModule,
  ]
})
export class AgGridJobManagerModule { }
