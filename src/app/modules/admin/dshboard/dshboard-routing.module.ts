import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DshboardComponent } from './dshboard.component';

const routes: Routes = [
  {path: '', component: DshboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DshboardRoutingModule { }
