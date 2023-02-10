import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-buses',
  templateUrl: './list-of-buses.component.html',
  styleUrls: ['./list-of-buses.component.scss']
})
export class ListOfBusesComponent {

  @Input() busStops: string[] = [];
}
