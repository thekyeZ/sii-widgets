import { Component, Input } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  @Input() weatherForTheDay!: WeatherData;

}
