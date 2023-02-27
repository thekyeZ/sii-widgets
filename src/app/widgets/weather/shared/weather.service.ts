import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather-data.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherSelected = new EventEmitter<WeatherData>();

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin');
  }
}
