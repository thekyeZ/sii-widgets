import { Component, OnDestroy, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-fav",
  templateUrl: "./crypto-fav.component.html",
  styleUrls: ["./crypto-fav.component.scss"],
})
export class CryptoFavComponent implements OnInit, OnDestroy {
  crypto: CryptoModel[] = [];
  selectedFavCrypto!: CryptoModel;
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
    this.cryptoIdService.favCrypto
      .pipe(
        switchMap((selectedCryptoId) => {
          return this.cryptoService.fetchCryptoDetails(selectedCryptoId!);
        })
      )
      .subscribe((cryptoItem) => {
        this.selectedFavCrypto = cryptoItem;
      });
  }

  ngOnDestroy() {
    this.cryptoServiceSubscribe.unsubscribe();
  }
}
