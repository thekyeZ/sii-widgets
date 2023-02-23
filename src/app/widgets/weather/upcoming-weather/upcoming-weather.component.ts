import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { WeatherData} from '../shared/weather-data.model';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})

export class UpcomingWeatherComponent {

  @Input() weatherForTheDay!: WeatherData;
  @Output() showDetails = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  readMore(value: string) {
    this.showDetails.emit(value);
    this.loggingService.logWeatherChange(value);
  }
}
