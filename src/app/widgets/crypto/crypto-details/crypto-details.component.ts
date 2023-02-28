import { Component, OnInit, Input } from "@angular/core";
import { CryptoIdService } from "../crypto-id.service";

import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-details",
  templateUrl: "./crypto-details.component.html",
  styleUrls: ["./crypto-details.component.scss"],
})
export class CryptoDetailsComponent implements OnInit {
  crypto: CryptoModel[] = [];
  selectedCrypto!: number;

  constructor(
    private cryptoService: CryptoService,
    private cryptoIdService: CryptoIdService
  ) {}

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
    this.cryptoIdService.selectedCrypto.subscribe((i) => {
      this.selectedCrypto = i;
    });
  }
}
