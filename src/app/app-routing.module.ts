import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAdminComponent } from './widgets/weather/weather-admin/weather-admin.component';
import { WeatherComponent } from './widgets/weather/weather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent},
  { path: 'weather-admin', component: WeatherAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
