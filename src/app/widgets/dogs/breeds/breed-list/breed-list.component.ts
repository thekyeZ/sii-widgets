import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cat } from '../../interfaces/cat';
import { BreedService } from '../breeds.service';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
})

export class BreedListComponent implements OnInit{
breedsCats: Cat[]=[];

constructor(private breedService: BreedService){}

ngOnInit(){
this.breedService.getBreed().subscribe(breedApi => {        
console.log(breedApi);
this.breedsCats = breedApi;
});
}

@Output() selectedItem = new EventEmitter<string>();

onBreed(feature: string){
this.selectedItem.emit(feature);
// console.log(feature);

}
}
