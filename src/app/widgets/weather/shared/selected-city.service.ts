import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageCityService } from '../shared/storage-city.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedCityService {
  selectedCity: BehaviorSubject<number>;

  constructor(
    private storageCityService: StorageCityService 
  ) {
    const storedCityIndex = parseInt(this.storageCityService.getSelectedCity('storedCity') || '0');
    this.selectedCity = new BehaviorSubject( storedCityIndex );
   }
  
}
