import { Component, OnInit } from '@angular/core';
import { WeatherData } from './shared/weather-data.model';
import { WeatherService } from './shared/weather.service';
import { SelectedDayService } from './shared/selected-day.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit{
  weatherData!: WeatherData;
  selectedDay!: number;
  i!: number;

  constructor(
    private weatherService: WeatherService,
    private selectedDayService: SelectedDayService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe(results => this.weatherData = results);
    this.selectedDayService.selectedDay.subscribe(selectedDayFromService => this.selectedDay = selectedDayFromService);
  }

  onOpenAdminPanel() {
    this.router.navigate(['weather-admin']);
  }
  //nie działa  a chciałbym, żeby wracało do strony głównej, odświeżało
  onSubmitSettings() {
    this.router.navigate(['weather']);
  }

  onSelected(i: number) {
    this.selectedDayService.selectedDay.next(i);
  }
  
  onShowDetails(value: string) {
    alert(value);
  }

}
