import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { UpcomingWeatherComponent } from './upcoming-weather/upcoming-weather.component';
import { WeatherSettingsComponent } from './weather-settings/weather-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAdminComponent } from './weather-admin/weather-admin.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    UpcomingWeatherComponent,
    WeatherSettingsComponent,
    WeatherAdminComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule {
  
}
