import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalBusStorageService {
  constructor() {}

  getData(key: string) {
    return localStorage.getItem(key);
  }

  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}

