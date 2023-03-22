import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs-compat';
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
  selectedSubscribe!: Subscription;
  fetchSubscribe!: Subscription;

  constructor(private breedService: BreedService,
    private selectedBreedS: SelectedBreedService
  ) { }

  ngOnInit() {
    this.selectedSubscribe = this.selectedBreedS.breedSelected.subscribe(
      (id: string) => {

        this.fetchSubscribe = this.breedService.getBreed(id).subscribe(
          (cat) => {

            this.selectedBreed = cat;
          }
        )
      }
    );

  };

  ngOnDestroy() {
    this.selectedSubscribe.unsubscribe();
    this.fetchSubscribe.unsubscribe();
  }
}

