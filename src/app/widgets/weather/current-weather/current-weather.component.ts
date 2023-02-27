import { Component, Input } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';
import { SelectedDayService } from '../shared/selected-day.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  @Input() weatherData!: WeatherData;
  @Input() selectedDay!: number;
  @Input() weatherSelected!: WeatherData;

}
