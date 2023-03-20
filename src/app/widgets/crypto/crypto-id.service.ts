import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class CryptoIdService implements OnInit {
  selectedCrypto = new BehaviorSubject(0);
  favCrypto = new BehaviorSubject(this.localStorage.getCrypto("form-data"));

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {}
}
