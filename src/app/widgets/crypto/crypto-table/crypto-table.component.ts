import { Component, Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private cryptoIdService: CryptoIdService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectedItem(i: number) {
    this.cryptoIdService.selectedCrypto.next(i);
  }

  toDetails() {
    this.router.navigate(["crypto/details"]);
  }

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }
}
