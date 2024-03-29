import { NgModule } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { FuseAlertModule } from '@fuse/components/alert';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AssessmentStatusComponent } from './assessment-status/assessment-status.component';
import { BookkeepingStatusComponent } from './bookkeeping-status/bookkeeping-status.component';
import { OnbordingFormComponent } from './onbording-form/onbording-form.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM/YYYY',
  },
  display: {
    dateInput: 'MMM, YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


const exampleRoutes: Route[] = [
  {
    path: '',
    component: ExampleComponent, children: [
      // {
      //   path: '', redirectTo: 'health', pathMatch: 'full',
      // },
      {
        path: ':id',
        component: ExampleComponent
      }
    ]
  }
  
  // {
  //   path: 'health',
  //   component: ExampleComponent
  // },

];

@NgModule({
  declarations: [
    ExampleComponent,
    OnbordingFormComponent,
    BookkeepingStatusComponent,
    AssessmentStatusComponent,
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
    MatDatepickerModule,
    MatSortModule,
    RouterModule.forChild(exampleRoutes),
    MatTableExporterModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ExampleModule { }
