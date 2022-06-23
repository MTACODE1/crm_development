import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DshboardRoutingModule } from './dshboard-routing.module';
import { DshboardComponent } from './dshboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [DshboardComponent],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    NgApexchartsModule,
    DshboardRoutingModule
  ]
})
export class DshboardModule { }
