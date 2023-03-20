import { Component, Injectable, OnDestroy, OnInit } from "@angular/core";
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
export class CryptoTableComponent implements OnInit, OnDestroy {
  crypto: CryptoModel[] = [];
  cryptoServiceSubscribe!: any;

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
    this.cryptoServiceSubscribe = this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }

  ngOnDestroy(): void {
    this.cryptoServiceSubscribe.unsubscribe();
  }
}
