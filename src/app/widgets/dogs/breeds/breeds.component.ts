import { Component } from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent {
listOfBreeds =[
  'Golden Retrievers', 'Boston Terriers', 'Labrador Retrievers', 'Poodles', 'Border Collie',
]
}
