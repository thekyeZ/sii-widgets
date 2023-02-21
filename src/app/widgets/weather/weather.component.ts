import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherForTheDay } from './shared/day.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  currentWeather = '9 °C';
  currentDate = Date();
  upcomingWeather = ['sunny', 'cold'];

  posts: WeatherForTheDay | null = null;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.requestPosts();
  }

  requestPosts() {
    this.http.get<WeatherForTheDay>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => console.log(results));
    this.http.get<WeatherForTheDay>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => this.posts = results);
  }
  
  readMore(details: string) {
    console.log(details);
  }

}
