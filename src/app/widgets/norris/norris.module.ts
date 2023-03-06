import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorrisComponent } from './norris.component';
import { HeaderComponent } from './header/header.component';
import { MemListComponent } from './mem/mem-list/mem-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './adminPanel/admin/admin.component';
import { AdminPanelModule } from './adminPanel/admin/admin-panel/admin-panel.module';
import { Routes } from '@angular/router';
import { headerModule } from './header/module/header.module';
import { FooterModule } from './footer/module/module.module';
import { MemListModule } from './mem/mem-list/module/module.module';

const routes: Routes = [
  {
    path: '', component: NorrisComponent
  },

  {
    path: 'admin/chuck', component: AdminComponent
  },
  
 
];

@NgModule({
  declarations: [
    NorrisComponent,
    AdminComponent,
  ],


  
  imports: [
    CommonModule, headerModule, FooterModule, MemListModule
    
    
  ],
  exports: [
    NorrisComponent
  ]
})
export class NorrisModule { }
