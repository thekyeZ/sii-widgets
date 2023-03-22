import { Component, Inject, Input } from '@angular/core';
import { Cat } from '../../interfaces/cat';


@Component({
  selector: 'app-breed-description',
  templateUrl: './breed-description.component.html',
  styleUrls: ['./breed-description.component.scss']
})
export class BreedDescriptionComponent {
  @Input()
  cat!: Cat;
constructor(){}
}
