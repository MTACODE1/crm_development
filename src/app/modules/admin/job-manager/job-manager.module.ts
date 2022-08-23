import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobManagerRoutingModule } from './job-manager-routing.module';
import { MatTableModule } from '@angular/material/table';
import { JobManagerComponent } from './job-manager.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [JobManagerComponent],
  imports: [
    CommonModule,
    JobManagerRoutingModule,
    MatTableModule,
    SharedModule,
    MatTooltipModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class JobManagerModule { }
