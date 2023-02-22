import { Component, Input } from '@angular/core';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-breed-description',
  templateUrl: './breed-description.component.html',
  styleUrls: ['./breed-description.component.scss']
})
export class BreedDescriptionComponent {
  @Input() catCat2: Cat[]=[];
  // https://api.thecatapi.com/v1/images/search?breed_ids={breed.id} to zdjecia
}
