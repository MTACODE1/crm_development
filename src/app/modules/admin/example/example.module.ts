import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { SharedModule } from 'app/shared/shared.module';
import { BookkeepingStatusComponent } from './bookkeeping-status/bookkeeping-status.component';
import { OnbordingFormComponent } from './onbording-form/onbording-form.component';

const exampleRoutes: Route[] = [
  {
    path : '',
    component: ExampleComponent
  }
];

@NgModule({
  declarations: [
    ExampleComponent,
    OnbordingFormComponent,
    BookkeepingStatusComponent,
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    FuseAlertModule,
    MatRadioModule,
    RouterModule.forChild(exampleRoutes)
  ]
})
export class ExampleModule { }
