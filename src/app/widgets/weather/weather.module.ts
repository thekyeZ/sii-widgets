import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { UpcomingWeatherComponent } from './upcoming-weather/upcoming-weather.component';
import { WeatherSettingsComponent } from './weather-settings/weather-settings.component';



@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    UpcomingWeatherComponent,
    WeatherSettingsComponent
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
