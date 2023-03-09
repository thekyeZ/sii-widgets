import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";

@Component({
  selector: "app-crypto-admin",
  templateUrl: "./crypto-admin.component.html",
  styleUrls: ["./crypto-admin.component.scss"],
})
export class CryptoAdminComponent implements OnInit {
  crypto: CryptoModel[] = [];
  cryptoSelect = "";

  form = new FormGroup({
    cryptos: new FormControl(this.crypto),
  });

  constructor(
    private cryptoIdService: CryptoIdService,
    private router: Router,
    private cryptoService: CryptoService
  ) {}

  onAccept(formData: any) {
    this.cryptoIdService.favCrypto.next(formData);
    console.log(this.cryptoSelect);
    this.router.navigate([""]);
  }

  onDecline() {
    this.router.navigate([""]);
  }

  ngOnInit() {
    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }
}
