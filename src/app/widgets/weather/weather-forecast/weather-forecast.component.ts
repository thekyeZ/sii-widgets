import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../shared/weather-data.model';
import { WeatherService } from '../shared/weather.service';
import { SelectedDayService } from '../shared/selected-day.service';
import { CitiesService } from '../shared/cities.service';
import { CitiesData} from '../shared/cities-data.model';
import { SelectedCityService } from '../shared/selected-city.service';
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
  cities: CitiesData[] = this.citiesService.cities;

  constructor(
    private weatherService: WeatherService,
    private selectedDayService: SelectedDayService,
    private selectedCityService: SelectedCityService,
    private citiesService: CitiesService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.selectedDayService.selectedDay.subscribe(selectedDayFromService => this.selectedDay = selectedDayFromService);
    this.weatherService.getWeatherData().subscribe(results => this.weatherData = results);
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