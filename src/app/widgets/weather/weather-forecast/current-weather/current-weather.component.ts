import { Component, Input } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';
import { CitiesData } from '../.././weather-admin/shared/cities-data.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  cities = ['Kraków', 'Gdańsk', 'Warszawa'];

  @Input() weatherData!: WeatherData;
  @Input() selectedDay!: number;
  @Input() citiesData!: CitiesData;
  @Input() selectedCity!: number;

}
