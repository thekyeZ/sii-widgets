import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';



@NgModule({
  declarations: [
    WeatherComponent,
    HeaderComponent,
    ListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
