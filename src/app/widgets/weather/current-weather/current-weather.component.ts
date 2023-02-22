import { Component, Input } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';
import { SelectedDayIdService } from '../shared/selected-day-id.service.ts.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  days = ['Monday', 'Tuesaday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  selectedDay!: number;

  constructor(
    private selectedDayService: SelectedDayIdService
    ) {}

    ngOnInit(): void {
      this.selectedDay = this.selectedDayService.selectedDay;
    }


  @Input() weatherForTheDay!: WeatherData;
  // @Input() currentWeather: string = '';
  // @Input() currentDate: string = '';
}
