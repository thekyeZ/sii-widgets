import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  public saveCrypto(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getCrypto(key: string) {
    return localStorage.getItem(key);
  }
}
