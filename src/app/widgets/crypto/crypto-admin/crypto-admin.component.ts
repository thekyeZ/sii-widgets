import { Component, OnInit, ViewChild } from "@angular/core";
import { CryptoIdService } from "../crypto-id.service";

@Component({
  selector: "app-crypto-admin",
  templateUrl: "./crypto-admin.component.html",
  styleUrls: ["./crypto-admin.component.scss"],
})
export class CryptoAdminComponent implements OnInit {
  @ViewChild("input") inputName: any;
  favCrypto!: number;
  value!: number;

  constructor(private cryptoIdService: CryptoIdService) {}

  onAccept(value: number) {
    value = this.favCrypto;
    console.log(value);
    this.inputName.nativeElement.value = "";
  }

  ngOnInit() {
    this.cryptoIdService.favCrypto.subscribe((value) => {
      this.favCrypto = value;
    });
  }
}
