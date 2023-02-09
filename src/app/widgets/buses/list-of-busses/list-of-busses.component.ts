import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-busses',
  templateUrl: './list-of-busses.component.html',
  styleUrls: ['./list-of-busses.component.scss']
})
export class ListOfBussesComponent {

  @Input() busStops: string[] = [];
}
