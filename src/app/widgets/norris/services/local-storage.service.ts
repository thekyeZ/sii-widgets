import { Injectable } from '@angular/core';

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
}



