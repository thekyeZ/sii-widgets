import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-forecast/shared/weather-data.model';
import { WeatherService } from '../weather-forecast/shared/weather.service';
import { SelectedDayService } from '../weather-forecast/shared/selected-day.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  weatherData!: WeatherData;
  selectedDay!: number;
  i!: number;

  constructor(
    private weatherService: WeatherService,
    private selectedDayService: SelectedDayService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(results => this.weatherData = results);
    this.selectedDayService.selectedDay.subscribe(selectedDayFromService => this.selectedDay = selectedDayFromService);
  }

  onOpenAdminPanel() {
    this.router.navigate(['weather-admin']);
  }

  onSelected(i: number) {
    this.selectedDayService.selectedDay.next(i);
  }

  onShowDetails(value: string) {
    alert(value);
  }

}
