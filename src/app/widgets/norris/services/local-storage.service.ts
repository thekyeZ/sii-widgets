import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  saveInLocalStorage (id: string, valueToSave: string) {
    localStorage.setItem(id, valueToSave)
  }

  getData (id: string): string | null {
    return localStorage.getItem(id)
  }

  formValue: BehaviorSubject<Function | null> = new BehaviorSubject<Function | null>(this.getData)

}



