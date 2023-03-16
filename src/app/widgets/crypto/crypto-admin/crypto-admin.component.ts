import { Component, OnInit } from "@angular/core";
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
  cryptoSelect: string = "";
  form!: FormGroup;

  constructor(
    private cryptoIdService: CryptoIdService,
    private router: Router,
    private cryptoService: CryptoService
  ) {}

  onAccept() {
    const selectedCrypto = this.form.get("cryptos")?.value;
    if (selectedCrypto) {
      this.cryptoIdService.favCrypto.next(selectedCrypto);
    }
    this.router.navigate([""]);
    localStorage.setItem("form-data", this.form.get("cryptos")?.value);
  }

  onDecline() {
    this.router.navigate([""]);
  }

  ngOnInit() {
    this.form = new FormGroup({
      cryptos: new FormControl(null),
    });

    this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }
}
