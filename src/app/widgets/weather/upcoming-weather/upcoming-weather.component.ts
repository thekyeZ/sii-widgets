import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { WeatherForTheDay} from '../shared/day.model';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})

export class UpcomingWeatherComponent {
  @Input() upcomingWeather: string[] = [];
  @Input() posts!: WeatherForTheDay;
  @Output() showDetails = new EventEmitter<string>();

  readMore(value: string) {
    this.showDetails.emit(value);
  }

}
