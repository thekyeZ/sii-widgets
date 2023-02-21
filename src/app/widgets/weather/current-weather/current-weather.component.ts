import { Component, Input } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';
// import { SelectedDayIdService } from '../shared/selected-day-id.service.ts.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  // constructor(private selectedDay: SelectedDayIdService) {
  //   this.selectedDay.selectedDay = 0;
  // }
  @Input() weatherForTheDay!: WeatherData;
  // @Input() currentWeather: string = '';
  // @Input() currentDate: string = '';
}
