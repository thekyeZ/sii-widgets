import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDayService {
  // selectedDay = new BehaviorSubject(6);
  selectedDay = new EventEmitter<number>();





}
