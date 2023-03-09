import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedCityService {
  selectedCity = new BehaviorSubject(2);
}
