import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherData} from '../shared/weather-data.model';
import { WeatherService } from '../shared/weather.service';
import { SelectedDayService } from '../shared/selected-day.service';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})

export class UpcomingWeatherComponent {

  @Input() weatherData!: WeatherData;
  @Input() day!: number;
  @Output() showDetails = new EventEmitter<string>();

  onShowDetails(value: string) {
    this.showDetails.emit(value);
  }

  constructor(
    private selectedDayService: SelectedDayService,
    private weatherService: WeatherService
  ) {}

  onSelected() {
    this.weatherService.weatherSelected.emit(this.weatherData);
  }

}
