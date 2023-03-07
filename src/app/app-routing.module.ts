import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAdminComponent } from './widgets/weather/weather-admin/weather-admin.component';
import { WeatherForecastComponent } from './widgets/weather/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', component: WeatherForecastComponent},
  { path: 'weather', component: WeatherForecastComponent},
  { path: 'weather-admin', component: WeatherAdminComponent},
  { path: 'forecast', component: WeatherForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
