import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageCityService {

  constructor() { }

  public saveSelectedCity(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getSelectedCity(key: string) {
    return localStorage.getItem(key);
  }
}
