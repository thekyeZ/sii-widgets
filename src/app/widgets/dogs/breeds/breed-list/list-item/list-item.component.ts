import { Component, Input } from '@angular/core';
import { Cat } from '../../../interfaces/cat';
import { BreedService } from '../../breeds.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input()
  cat!: Cat;

  constructor(private breedService: BreedService) { }

  onSelected(cat: Cat) {
    this.breedService.breedSelected.next(cat);
  }
}
