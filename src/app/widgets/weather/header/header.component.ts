import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cityName = 'Kraków';
  date = new Date();
  temperature = 10;
  units = 'C';
}
