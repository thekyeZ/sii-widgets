import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent {
@Input() breeds: string[]=[];
}
