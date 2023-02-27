import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemDataValueService {

  constructor() { }

 
  selectedCategory:BehaviorSubject<string> = new BehaviorSubject<string>("")
 
 
}
