import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  currentWeather = '9 °C';
  currentDate = Date();
  upcomingWeather = ['sunny', ' cloudy', ' windy', 'hot', 'raining'];
  
  readMore(details: string) {
    console.log(details);
  }

}
