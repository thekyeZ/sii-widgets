import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminPanel/admin/admin.component';
import { NorrisComponent } from './norris.component';



 
const routes: Routes = [
  {
    path: '', component: NorrisComponent
  },

  {
    path: 'admin/chuck', component: AdminComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
