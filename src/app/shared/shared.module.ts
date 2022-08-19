import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginatorComponent } from './pagination/paginator/paginator.component';
import { SearchPipe } from './pipe/search.pipe';
import { NoWhiteSpaceAllowDirective } from './no-white-space-allow.directive';

const common = [
  SearchPipe,
  PaginatorComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NoWhiteSpaceAllowDirective,
    ...common,
  ],
  declarations: [
    ...common,
    PaginationComponent,
    NoWhiteSpaceAllowDirective,
  ]
})
export class SharedModule { }
