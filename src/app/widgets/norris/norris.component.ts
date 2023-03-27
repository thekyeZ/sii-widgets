import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MemHttpService } from "./services/mem-http.service";

@Component({
  selector: "app-norris",
  templateUrl: "./norris.component.html",
  styleUrls: ["./norris.component.scss"],
})
export class NorrisComponent implements OnInit {
  memToDisplay?: string
  subscription?: Subscription

  requestHttp() {
    return this.memService
      .getDataMem()
      .subscribe((results) => (this.memToDisplay = results.value))
  }
  ngOnInit() {
    const sub = this.requestHttp();
    if (sub) {
      this.subscription = sub;
    }
  }
  constructor(private memService: MemHttpService) {}

  ngOnDestroy() {
     if (this.subscription) {
      this.subscription.unsubscribe();
  }}
}
