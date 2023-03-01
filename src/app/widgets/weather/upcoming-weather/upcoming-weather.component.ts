import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherData} from '../shared/weather-data.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})

export class UpcomingWeatherComponent {

  @Input() weatherData!: WeatherData;
  @Output() selectDay = new Subject<number>();
  @Output() showDetails = new EventEmitter<string>();


  onShowDetails(value: string) {
    this.showDetails.emit(value);
  }

  onSelected(i: number) {
    this.selectDay.next(i);
  }

}
