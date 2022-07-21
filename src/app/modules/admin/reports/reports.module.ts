import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { BookkeepingBreakDownComponent } from './bookkeeping-break-down/bookkeeping-break-down.component';
import { SharedModule } from 'app/shared/shared.module';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { VatBreakDownComponent } from './bookkeeping-break-down/vat-break-down/vat-break-down.component';
import { IndividualComponent } from './bookkeeping-break-down/individual/individual.component';
import { AccountantClientComponent } from './accountant-client/accountant-client.component';


@NgModule({
  declarations: [BookkeepingBreakDownComponent, VatBreakDownComponent, IndividualComponent, CompletedTaskComponent, AccountantClientComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
