import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from './shared/weather-data.model';
import { CitiesService } from './shared/cities.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  weatherForTheDay: WeatherData | null = null;
  cities: string[] = [];
  selectedCity!: number;

  constructor(
    private http: HttpClient,
    private citiesService: CitiesService
    ) {}
  
  ngOnInit(): void {
    this.requestPosts();
    this.cities = this.citiesService.cities;
    this.selectedCity = this.citiesService.selectedCity;
  }

  requestPosts() {
    this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => this.weatherForTheDay = results);
  }
  
  readMore(details: string) {
    alert(details);
  }

}
