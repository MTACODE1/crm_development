import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridJobManagerComponent } from './ag-grid-job-manager.component';


const routes: Routes = [
  {path: '', component: AgGridJobManagerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridJobManagerRoutingModule { }
