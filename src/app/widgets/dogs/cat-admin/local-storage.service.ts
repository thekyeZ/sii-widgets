import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(key: string, value: string) {
    localStorage.setItem(key, value)
  }
  getData(key: string) {
    return localStorage.getItem(key)
  }
}
