import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorrisComponent } from './norris.component';



@NgModule({
  declarations: [
    NorrisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NorrisComponent
  ]
})
export class NorrisModule { }
