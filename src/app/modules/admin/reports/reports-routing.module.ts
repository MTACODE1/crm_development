import { VatBreakDownComponent } from './vat-break-down/vat-break-down.component';
import { BookkeepingBreakDownComponent } from './bookkeeping-break-down/bookkeeping-break-down.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'book'
      },
      {
        path: 'bookkeeping',
        component: BookkeepingBreakDownComponent
      },
      {
        path: 'vat',
        component: VatBreakDownComponent
      },
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
