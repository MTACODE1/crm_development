import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantClientComponent } from './accountant-client/accountant-client.component';
import { BookkeepingBreakDownComponent } from './bookkeeping-break-down/bookkeeping-break-down.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';

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
        path: 'completed-task',
        component: CompletedTaskComponent
      },
      {
        path: 'accountant',
        component: AccountantClientComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
