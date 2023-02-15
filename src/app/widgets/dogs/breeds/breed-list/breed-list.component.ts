import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {
@Input() breeds: string[]=[];

}
