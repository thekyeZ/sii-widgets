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

  getWeatherData() {
    // return this.http.get<WeatherData>(`https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin`);
    return this.http.get<WeatherData>(`https://api.open-meteo.com/v1/forecast?latitude=${this.cities[this.selectedCityService.selectedCity.value].latitude}&longitude=${this.cities[this.selectedCityService.selectedCity.value].longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin`);

  }
}
