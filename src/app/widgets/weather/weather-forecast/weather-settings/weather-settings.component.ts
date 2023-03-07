import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-settings',
  templateUrl: './weather-settings.component.html',
  styleUrls: ['./weather-settings.component.scss']
})
export class WeatherSettingsComponent {

  @Output() openAdminPanel = new EventEmitter<Event>();

  onOpenAdminPanel(event: Event) {
    this.openAdminPanel.emit(event);
  }

}
