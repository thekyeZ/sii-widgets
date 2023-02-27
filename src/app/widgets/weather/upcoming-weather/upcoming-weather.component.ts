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
  @Output() selectDay = new EventEmitter<string>();

  onShowDetails(value: string) {
    this.showDetails.emit(value);
  }

  onSelectingDay(value: string) {
    this.selectDay.next(value);
  }


}
