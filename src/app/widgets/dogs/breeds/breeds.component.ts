import { Component, OnInit } from '@angular/core';
import { Cat } from '../interfaces/cat';
import { BreedService } from './breeds.service';
import { SelectedBreedService } from './selected-breed.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
  providers: [BreedService],
})
export class BreedsComponent implements OnInit {

  selectedBreed!: Cat;

  title: string = 'breed list';

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
