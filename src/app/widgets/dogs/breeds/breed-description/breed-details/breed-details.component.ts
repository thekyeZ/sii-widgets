import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../../../interfaces/cat';
import { BreedService } from '../../breeds.service';
import { SelectedBreedService } from '../../selected-breed.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent {

  selectedBreed!: Cat;

  constructor(private breedService: BreedService,
    private selectedBreedS: SelectedBreedService
  ) { }

  ngOnInit() {
    this.selectedBreedS.breedSelected.subscribe(
      (id: string) => {
        this.breedService.getBreed(id).subscribe(
          (cat) => {
            this.selectedBreed = cat;
          }
        )
      }
    );
  };
}
