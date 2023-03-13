import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemListComponent } from '../mem-list.component';



@NgModule({
  declarations: [
    MemListComponent
  ],
  exports: [
    MemListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MemListModule { }
