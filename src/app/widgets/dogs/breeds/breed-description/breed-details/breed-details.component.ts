import { Component } from '@angular/core';
import { Cat } from '../../../interfaces/cat';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent {
  catDetail!: Cat;
}
