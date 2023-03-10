import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './weather-forecast/current-weather/current-weather.component';
import { UpcomingWeatherComponent } from './weather-forecast/upcoming-weather/upcoming-weather.component';
import { WeatherSettingsComponent } from './weather-forecast/weather-settings/weather-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAdminComponent } from './weather-admin/weather-admin.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    UpcomingWeatherComponent,
    WeatherSettingsComponent,
    WeatherAdminComponent,
    WeatherForecastComponent,
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    WeatherRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {
  
}
