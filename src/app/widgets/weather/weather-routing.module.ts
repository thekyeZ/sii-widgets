import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAdminComponent } from './weather-admin/weather-admin.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', component: WeatherForecastComponent},
  { path: 'weather-admin', component: WeatherAdminComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class WeatherRoutingModule { }
