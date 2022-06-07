import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';

const exampleRoutes: Route[] = [
  {
    path : '',
    component: ExampleComponent
  }
];

@NgModule({
    declarations: [
      ExampleComponent
    ],
    imports: [
      MatButtonModule,
      RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
