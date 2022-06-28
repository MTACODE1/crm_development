import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginatorComponent } from './pagination/paginator/paginator.component';
import { SearchPipe } from './pipe/search.pipe';

const pipes = [
  SearchPipe
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
    ...pipes,
    ReactiveFormsModule,
    PaginatorComponent,
  ],
  declarations: [
    ...pipes,
    PaginationComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
