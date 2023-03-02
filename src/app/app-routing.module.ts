import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './widgets/norris/adminPanel/admin/admin.component';
import { NorrisComponent } from './widgets/norris/norris.component';


const routes: Routes = [
  {
    path: '', component: NorrisComponent
  },
 
  {
    path: 'admin/chuck', component: AdminComponent
  },
  
  {
    path: '**', component: NorrisComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
