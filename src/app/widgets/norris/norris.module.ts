import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorrisComponent } from './norris.component';
import { HeaderComponent } from './header/header.component';

import { MemListComponent } from './mem/mem-list/mem-list.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NorrisComponent,
    HeaderComponent,
    
    MemListComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NorrisComponent
  ]
})
export class NorrisModule { }
