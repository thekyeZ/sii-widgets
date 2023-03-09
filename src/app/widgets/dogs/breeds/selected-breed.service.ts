import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedBreedService {

  breedSelected: BehaviorSubject<string> = new BehaviorSubject('abys');

  constructor() { }
}
