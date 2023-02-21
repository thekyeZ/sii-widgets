import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectedDayIdService } from './shared/selected-day-id.service.ts.service';
import { WeatherData } from './shared/weather-data.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  days = ['Monday', 'Tuesaday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  selectedDay!: number;
  weatherForTheDay: WeatherData | null = null;
  
  constructor(
    private http: HttpClient,
    private selectedDayService: SelectedDayIdService
    ) {}
  
  ngOnInit(): void {
    this.requestPosts();
    this.selectedDay = this.selectedDayService.selectedDay;
  }

  requestPosts() {
    // this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => console.log(results));
    this.http.get<WeatherData>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => this.weatherForTheDay = results);
  }
  
  readMore(details: string) {
    alert(details);
  }

}
