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
  SelectedSubscribe!: Subscription;
  FetchSubscribe!: Subscription;

  constructor(private breedService: BreedService,
    private selectedBreedS: SelectedBreedService
  ) { }

  ngOnInit() {
    this.SelectedSubscribe = this.selectedBreedS.breedSelected.subscribe(
      (id: string) => {
        console.log(id);
        this.FetchSubscribe = this.breedService.getBreed(id).subscribe(
          (cat) => {
            console.log('cokolwiek', id, cat);
            this.selectedBreed = cat;
          }
        )
      }
    );

  };

  ngOnDestroy() {
    this.SelectedSubscribe.unsubscribe();
    this.FetchSubscribe.unsubscribe();
  }
}

