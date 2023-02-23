import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-cats',
  templateUrl: './header-cats.component.html',
  styleUrls: ['./header-cats.component.scss']
})
export class HeaderCatsComponent {
@Output() selectedItem = new EventEmitter<string>();

onMenu(feature: string){
this.selectedItem.emit(feature);
console.log(feature);

}
}
