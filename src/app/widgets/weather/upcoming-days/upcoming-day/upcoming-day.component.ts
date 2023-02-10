import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming-day',
  templateUrl: './upcoming-day.component.html',
  styleUrls: ['./upcoming-day.component.scss']
})
export class UpcomingDayComponent {
  name = 'Monday';
  date = new Date();
  temperature = 10;

}
