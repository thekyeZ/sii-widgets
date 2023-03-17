import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../cat-admin/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedBreedService {

  breedSelected: BehaviorSubject<string> = new BehaviorSubject<string>(this.localstorageService.getData('defaultCatBreed') || 'abys');

  constructor(
    private localstorageService: LocalStorageService,
  ) {}

}



