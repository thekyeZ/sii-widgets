import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';



@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DogsComponent
  ]
})
export class DogsModule { }
