import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorrisComponent } from './widgets/norris/norris.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './widgets/norris/adminPanel/admin/admin.component';
 
const routes: Routes = [
  {
    path: '', component: NorrisComponent
  },

  {
    path: 'admin/chuck', component: AdminComponent
  },

  {
    path: 'admin/chuck/:category/:id', component: AdminComponent
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
