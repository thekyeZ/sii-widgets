import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../weather-forecast/shared/weather-data.model';
import { WeatherService } from '../weather-forecast/shared/weather.service';
import { SelectedDayService } from '../weather-forecast/shared/selected-day.service';
import { SelectedCityService } from '../weather-admin/shared/selected-city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  weatherData!: WeatherData;
  selectedDay!: number;
  selectedCity!: number;
  i!: number;

  constructor(
    private weatherService: WeatherService,
    private selectedDayService: SelectedDayService,
    private selectedCityService: SelectedCityService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(results => this.weatherData = results);
    this.selectedDayService.selectedDay.subscribe(selectedDayFromService => this.selectedDay = selectedDayFromService);
    this.selectedCityService.selectedCity.subscribe(selectedCityFromService => this.selectedCity = selectedCityFromService);
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
