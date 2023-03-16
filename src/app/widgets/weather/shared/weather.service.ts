import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather-data.model';
import { CitiesService } from '../shared/cities.service';
import { CitiesData} from '../shared/cities-data.model';
import { SelectedCityService } from '../shared/selected-city.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cities: CitiesData[] = this.citiesService.cities;
  selectedCity!: number;

  constructor(
    private http: HttpClient,
    private citiesService: CitiesService,
    private selectedCityService: SelectedCityService
    ) { }

  fetchWeatherData() {
    let selectedLatitude = this.cities[this.selectedCityService.selectedCity.value].latitude;
    let selectedLongitude = this.cities[this.selectedCityService.selectedCity.value].longitude;
    return this.http.get<WeatherData>(`https://api.open-meteo.com/v1/forecast?latitude=${selectedLatitude}&longitude=${selectedLongitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin`);

  }
}
