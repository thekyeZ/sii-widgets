import { Component, Injectable, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Injectable()
@Component({
  selector: "app-crypto-table",
  templateUrl: "./crypto-table.component.html",
  styleUrls: ["./crypto-table.component.scss"],
})
export class CryptoTableComponent implements OnInit, OnDestroy {
  crypto: CryptoModel[] = [];
  cryptoServiceSubscribe!: Subscription;

  constructor(
    private cryptoService: CryptoService,
    private cryptoIdService: CryptoIdService,
    private router: Router
  ) {}

  selectedItem(i: number) {
    this.cryptoIdService.selectedCrypto.next(i);
  }

  toDetails() {
    this.router.navigate(["crypto/details"]);
  }

  ngOnInit() {
    this.cryptoServiceSubscribe = this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }

  ngOnDestroy(): void {
    this.cryptoServiceSubscribe.unsubscribe();
  }
}
