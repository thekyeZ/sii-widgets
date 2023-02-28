import { Component, Injectable, OnInit } from "@angular/core";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Injectable()
@Component({
  selector: "app-crypto-table",
  templateUrl: "./crypto-table.component.html",
  styleUrls: ["./crypto-table.component.scss"],
})
export class CryptoTableComponent implements OnInit {
  crypto: CryptoModel[] = [];

  constructor(
    private cryptoService: CryptoService,
    private cryptoIdService: CryptoIdService
  ) {}

  selectedItem(i: number) {
    this.cryptoIdService.selectedCrypto.next(i);
    console.log(this.cryptoIdService.selectedCrypto.value);
  }

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }

  // getId(id: string) {
  //   const cryptoId = this.crypto.find((crypto) => {
  //     return crypto.id === id;
  //   });
  //   return console.log(cryptoId);
  // }
}
