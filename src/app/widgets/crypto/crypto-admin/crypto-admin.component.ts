import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CryptoIdService } from "../crypto-id.service";
import { CryptoModel } from "../crypto.model";
import { CryptoService } from "../crypto.service";
import { LocalStorageService } from "../local-storage.service";

@Component({
  selector: "app-crypto-admin",
  templateUrl: "./crypto-admin.component.html",
  styleUrls: ["./crypto-admin.component.scss"],
})
export class CryptoAdminComponent implements OnInit, OnDestroy {
  crypto: CryptoModel[] = [];
  cryptoSelect: string = "";
  form!: FormGroup;
  cryptoServiceSubscribe!: Subscription;
  colors = ["blue", "yellow", "purple"];

  constructor(
    private cryptoIdService: CryptoIdService,
    private router: Router,
    private cryptoService: CryptoService,
    private localStorage: LocalStorageService
  ) {}

  onAccept() {
    const selectedCrypto = this.form.get("cryptos")?.value;
    if (selectedCrypto) {
      this.cryptoIdService.favCrypto.next(selectedCrypto);
    }
    this.router.navigate([""]);
    this.localStorage.saveCrypto("form-data", this.form.get("cryptos")?.value);
  }

  onDecline() {
    this.router.navigate([""]);
  }

  acceptedColors(control: FormControl): { [c: string]: boolean } | null {
    if (this.colors.indexOf(control.value)) {
      return { colorIsGood: true };
    }
    return null;
  }

  ngOnInit() {
    this.form = new FormGroup({
      cryptos: new FormControl(null, Validators.required),
      favColor: new FormControl(null, [
        Validators.required,
        this.acceptedColors.bind(this),
      ]),
    });

    this.cryptoServiceSubscribe = this.cryptoService
      .fetchCryptoItem()
      .subscribe((cryptoItems) => (this.crypto = cryptoItems));
  }

  ngOnDestroy() {
    this.cryptoServiceSubscribe.unsubscribe();
  }
}
