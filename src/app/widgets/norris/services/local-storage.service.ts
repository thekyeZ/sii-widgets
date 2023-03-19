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

  getData (id: string) {
    return localStorage.getItem(id)
  }

  formValue: BehaviorSubject<Function> = new BehaviorSubject<Function>(this.getData)

}



// onButtonSave () {
//   const sendSimpleFormToLocalStorage: string = JSON.stringify(this.simpleForm?.value);
//   const formName:string = "form-data";
//   localStorage.setItem(formName, sendSimpleFormToLocalStorage);
// }