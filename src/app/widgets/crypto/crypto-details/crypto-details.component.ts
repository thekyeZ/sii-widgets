import { Component, OnDestroy, OnInit } from "@angular/core";
import { CryptoIdService } from "../crypto-id.service";

import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-details",
  templateUrl: "./crypto-details.component.html",
  styleUrls: ["./crypto-details.component.scss"],
})
export class CryptoDetailsComponent implements OnInit, OnDestroy {
  crypto: CryptoModel[] = [];
  selectedCrypto!: number;
  cryptoServiceSubscribe!: any;
  cryptoIdServiceSubscribe!: any;

  constructor(
    private cryptoService: CryptoService,
    private cryptoIdService: CryptoIdService
  ) {}

  ngOnInit() {
    this.cryptoServiceSubscribe = this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
    this.cryptoIdServiceSubscribe =
      this.cryptoIdService.selectedCrypto.subscribe((i) => {
        this.selectedCrypto = i;
      });
  }

  ngOnDestroy() {
    this.cryptoServiceSubscribe.unsubscribe();
    this.cryptoIdServiceSubscribe.unsubscribe();
  }
}
