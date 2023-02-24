import { Component, OnInit } from '@angular/core';
import { WeatherData } from './shared/weather-data.model';
import { WeatherService } from './shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit{
  weatherForTheDay: WeatherData | null = null;

  constructor(
    private weatherService: WeatherService,
    ) {}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(results => this.weatherForTheDay = results);
  }
  
  readMore(details: string) {
    alert(details);
  }

}
