import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-crypto-admin",
  templateUrl: "./crypto-admin.component.html",
  styleUrls: ["./crypto-admin.component.scss"],
})
export class CryptoAdminComponent {
  @ViewChild("input") inputName: any;

  onAccept(value: string) {
    console.log(value);
    this.inputName.nativeElement.value = "";
  }
}
