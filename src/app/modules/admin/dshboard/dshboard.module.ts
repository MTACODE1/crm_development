import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DshboardRoutingModule } from './dshboard-routing.module';
import { DshboardComponent } from './dshboard.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [DshboardComponent],
  imports: [
    SharedModule,
    MatDatepickerModule,
    MatIconModule,
    NgApexchartsModule,
    MatFormFieldModule,
    MomentDateModule,
    DshboardRoutingModule
  ],

  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],

})
export class DshboardModule { }
