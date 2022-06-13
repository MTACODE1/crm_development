import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { NotFoundComponent } from './not-found.component';

const error404Routes: Route[] = [
  {
    path : '',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    InlineSVGModule,
    RouterModule.forChild(error404Routes)
  ]
})
export class NotFoundModule { }
