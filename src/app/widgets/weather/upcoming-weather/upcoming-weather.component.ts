import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherData} from '../shared/weather-data.model';
import { SelectedDayService } from '../shared/selected-day.service';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})

export class UpcomingWeatherComponent {

  @Input() weatherData!: WeatherData;
  @Output() showDetails = new EventEmitter<string>();


  onShowDetails(value: string) {
    this.showDetails.emit(value);
  }

  constructor(
    private selectedDayService: SelectedDayService,
  ) {}

  onSelected(i: number) {
    this.selectedDayService.selectedDay.next(i);
    console.log(this.selectedDayService.selectedDay.value);

  }

}
