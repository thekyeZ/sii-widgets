import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  currentWeather = 'Look outside the window to check current weather!';
  upcomingWeather= ['sunny', ' cloudy', ' windy'];
}
