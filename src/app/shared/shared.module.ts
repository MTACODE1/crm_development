import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';

const pipes = [
  SearchPipe
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...pipes,
    ReactiveFormsModule
  ],
  declarations: [
    ...pipes
  ]
})
export class SharedModule { }
