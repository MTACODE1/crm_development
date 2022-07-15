import { MatTableModule } from '@angular/material/table';
import { BookkeepingBreakDownComponent } from './bookkeeping-break-down/bookkeeping-break-down.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { VatBreakDownComponent } from './vat-break-down/vat-break-down.component';
import { IndividualComponent } from './individual/individual.component';


@NgModule({
  declarations: [BookkeepingBreakDownComponent, VatBreakDownComponent, IndividualComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
