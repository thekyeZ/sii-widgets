import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorrisComponent } from './norris.component';
import { HeaderComponent } from './header/header.component';

import { MemListComponent } from './mem/mem-list/mem-list.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './adminPanel/admin/admin.component';



@NgModule({
  declarations: [
    NorrisComponent,
    HeaderComponent,
    
    MemListComponent,
    FooterComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NorrisComponent
  ]
})
export class NorrisModule { }
