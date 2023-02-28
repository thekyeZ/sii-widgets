import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDayService {
  selectedDay = new BehaviorSubject(0);

  // selectDay(){
  //   return this.selectedDay;
  //   console.log(this.selectedDay);
  // }

}
