import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CryptoIdService {
  selectedCrypto = new BehaviorSubject(0);
  favCrypto = new BehaviorSubject("bitcoin");

  constructor() {}
}
