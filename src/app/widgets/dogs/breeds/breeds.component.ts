import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent {
  listOfBreeds = [
    'Bengal', 'Bombai', 'Cheetoh', 'Cornish Rex', 'Chausie',
  ]

}
