import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-admin',
  templateUrl: './weather-admin.component.html',
  styleUrls: ['./weather-admin.component.scss']
})
export class WeatherAdminComponent {

  @Output() submitSettings = new EventEmitter<Event>();

  onSubmitSettings(event: Event) {
    this.submitSettings.emit(event);
  }


}
