import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    AdminComponent, 
   
  ],
  exports:[
    AdminComponent, 
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule
    
  ]
})
export class AdminPanelModule { }
