import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-weather',
  templateUrl: './upcoming-weather.component.html',
  styleUrls: ['./upcoming-weather.component.scss']
})
export class UpcomingWeatherComponent {
  @Input() upcomingWeather: string[] = [];

}
