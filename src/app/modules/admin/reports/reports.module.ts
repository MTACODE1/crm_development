import { NgModule } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'app/shared/shared.module';
import { MY_FORMATS } from '../example/example.module';
import { AccountantClientComponent } from './accountant-client/accountant-client.component';
import { BookkeepingBreakDownComponent } from './bookkeeping-break-down/bookkeeping-break-down.component';
import { IndividualComponent } from './bookkeeping-break-down/individual/individual.component';
import { VatBreakDownComponent } from './bookkeeping-break-down/vat-break-down/vat-break-down.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { ReportsRoutingModule } from './reports-routing.module';


@NgModule({
  declarations: [BookkeepingBreakDownComponent, VatBreakDownComponent, IndividualComponent, CompletedTaskComponent, AccountantClientComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    ReportsRoutingModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class ReportsModule { }
