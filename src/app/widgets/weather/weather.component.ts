import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  currentWeather = '9 °C';
  currentDate = Date();
  upcomingWeather = ['sunny', 'cold'];

  posts: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.requestPosts();
  }

  requestPosts() {
    // this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(results => this.posts = results);
    this.http.get<any>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => console.log(results));
    this.http.get<any>('https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&daily=temperature_2m_max&timezone=Europe%2FBerlin').subscribe(results => this.posts = results.daily.temperature_2m_max);
  }
  
  readMore(details: string) {
    console.log(details);
  }

}
