import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin.component';
import { HeaderComponent } from '../../../header/header.component';





@NgModule({
  declarations: [
    // AdminComponent
  ],
  exports:[
    // AdminComponent, 
  ],

  imports: [
    CommonModule
  ]
})
export class AdminPanelModule { }
