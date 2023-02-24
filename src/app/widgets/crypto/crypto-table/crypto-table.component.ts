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
  cryptoId = "";

  getId() {
    const index = this.crypto.findIndex(
      (crypto: { id: any }) => crypto.id == crypto.id
    );
    console.log(index);
  }

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }
}
