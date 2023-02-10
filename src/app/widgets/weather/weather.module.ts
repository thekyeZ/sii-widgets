import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { HeaderComponent } from './header/header.component';
import { UpcomingDaysComponent } from './upcoming-days/upcoming-days.component';
import { UpcomingDayComponent } from './upcoming-days/upcoming-day/upcoming-day.component';



@NgModule({
  declarations: [
    WeatherComponent,
    HeaderComponent,
    UpcomingDaysComponent,
    UpcomingDayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {
  
}
