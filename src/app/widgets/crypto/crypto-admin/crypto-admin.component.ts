import { Component } from "@angular/core";

@Component({
  selector: "app-crypto-admin",
  templateUrl: "./crypto-admin.component.html",
  styleUrls: ["./crypto-admin.component.scss"],
})
export class CryptoAdminComponent {
  onAccept(value: string) {
    console.log(value);
  }
}
