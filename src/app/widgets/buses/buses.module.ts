import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses.component';



@NgModule({
  declarations: [
    BusesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusesComponent
  ]
})
export class BusesModule { }
