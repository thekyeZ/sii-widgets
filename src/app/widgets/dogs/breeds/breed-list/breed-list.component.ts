import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent {
@Input() breeds: string[]=[];
@Input() catCat2: Cat[]=[];
@Output() selectedItem = new EventEmitter<string>();

onBreed(feature: string){
this.selectedItem.emit(feature);
console.log(feature);

}
}
