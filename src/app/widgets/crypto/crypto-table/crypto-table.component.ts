import { Component, Injectable, OnInit } from "@angular/core";
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

  getId(id: string) {
    const cryptoId = this.crypto.find((crypto) => {
      return crypto.id === id;
    });
    return console.log(cryptoId);
  }

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }
}
