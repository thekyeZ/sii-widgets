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
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(results => this.posts = results);
  }
  
  readMore(details: string) {
    console.log(details);
  }

}
