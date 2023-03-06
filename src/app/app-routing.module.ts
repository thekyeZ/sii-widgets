import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './widgets/norris/adminPanel/admin/admin.component';
import { NorrisComponent } from './widgets/norris/norris.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './widgets/norris/header/header.component';
 
const routes: Routes = [
  {
    path: '', component: NorrisComponent
  },
  
  // {
  //   path: 'chuck', component: NorrisComponent
  // },
 
  {
    path: 'admin/chuck', component: AdminComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
