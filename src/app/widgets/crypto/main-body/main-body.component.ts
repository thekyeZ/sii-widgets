import { Component, OnInit } from "@angular/core";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-main-body",
  templateUrl: "./main-body.component.html",
  styleUrls: ["./main-body.component.scss"],
})
export class MainBodyComponent implements OnInit {
  crypto: CryptoModel[] = [];

  getId() {
    console.log("gettingId");
  }

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }

  // worstCrypto(){
  //   return Math.min(...this.crypto)
  // }
}
