import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginatorComponent } from './pagination/paginator/paginator.component';
import { SearchPipe } from './pipe/search.pipe';
import { NoWhiteSpaceAllowDirective } from './no-white-space-allow.directive';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { CustomTooltip } from 'app/modules/admin/ag-grid-job-manager/custom-tooltip-component';

const common = [
  SearchPipe,
  PaginatorComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatChipsModule,
    ReactiveFormsModule,   
    NoWhiteSpaceAllowDirective,
    ...common,
  ],
  declarations: [
    ...common,
    PaginationComponent,
    NoWhiteSpaceAllowDirective,
    CustomTooltip
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
