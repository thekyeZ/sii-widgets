import { Component, OnInit } from "@angular/core";
import { Subscribable, Subscriber, Subscription } from "rxjs";
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
      .requestForApi()
      .subscribe((results) => (this.memToDisplay = results.value))
  }
  ngOnInit() {
   this.subscription = this.requestHttp()
  }
  constructor(private memService: MemHttpService) {}

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
