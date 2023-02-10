import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-day',
  templateUrl: './upcoming-day.component.html',
  styleUrls: ['./upcoming-day.component.scss']
})
export class UpcomingDayComponent {
  name = 'Monday';
  date = '10. 02. 2023';
  temperature = 10;


}
