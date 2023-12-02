import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cat } from '../interfaces/cat';
import { BreedService } from './breeds.service';
import { SelectedBreedService } from './selected-breed.service';
import { switchMap } from 'rxjs/operators';

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

  constructor(private breedService: BreedService,
    private selectedBreedS: SelectedBreedService
  ) { }

  ngOnInit() {
   this.selectedSubscribe = this.selectedBreedS.breedSelected.pipe(switchMap(
      (id:string) => {
        return this.breedService.getBreed(id);
      })
    ).subscribe((cat: Cat) => {
      this.selectedBreed = cat;
    });
  }

  ngOnDestroy() {
    this.selectedSubscribe.unsubscribe();
  }
}

