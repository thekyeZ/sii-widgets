import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CryptoIdService implements OnInit {
  selectedCrypto = new BehaviorSubject(0);
  formValue!: any;
  favCrypto = new BehaviorSubject(localStorage.getItem("form-data"));

  constructor() {}

  ngOnInit() {}
}
