import { Component, OnInit } from '@angular/core';
import { WeatherData } from './shared/weather-data.model';
import { WeatherService } from './shared/weather.service';
import { SelectedDayService } from './shared/selected-day.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit{
  weatherData: WeatherData | null = null;
  selectedDay!: any;

  constructor(
    private weatherService: WeatherService,
    private selectedDayService: SelectedDayService,
    ) {}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(results => this.weatherData = results);
    this.selectedDayService.selectedDay.subscribe(selectedDayFromService => this.selectedDay = selectedDayFromService);
  }

  setSelectedDay() {
    this.selectedDayService.selectedDay.next(0);
    console.log(this.selectedDay);
  }
  
  readMore(details: string) {
    alert(details);
  }

}
