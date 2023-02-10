import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { UpcomingWeatherComponent } from './upcoming-weather/upcoming-weather.component';
import { UpcomingWeatherItemComponent } from './upcoming-weather/upcoming-weather-item/upcoming-weather-item.component';



@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    UpcomingWeatherComponent,
    UpcomingWeatherItemComponent
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
