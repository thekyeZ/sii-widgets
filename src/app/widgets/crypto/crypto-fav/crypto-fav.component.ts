import { Component } from "@angular/core";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-fav",
  templateUrl: "./crypto-fav.component.html",
  styleUrls: ["./crypto-fav.component.scss"],
})
export class CryptoFavComponent {
  crypto: CryptoModel[] = [];
  selectedFavCrypto!: CryptoModel;

  constructor(
    private cryptoService: CryptoService,
    private cryptoIdService: CryptoIdService
  ) {}

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
    this.cryptoIdService.favCrypto.subscribe((selectedCryptoId) => {
      this.cryptoService
        .fetchCryptoDetails(selectedCryptoId!)
        .subscribe((cryptoItem) => {
          this.selectedFavCrypto = cryptoItem;
        });
    });
  }
}
