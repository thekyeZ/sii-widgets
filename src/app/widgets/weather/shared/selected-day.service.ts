import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDayService {
  selectedDay = new BehaviorSubject(2);
  showSelectedDay() {
    console.log("The selected day is" + this.selectedDay);
  }


}
