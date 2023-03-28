import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MemHttpService } from "./services/mem-http.service";

@Component({
  selector: "app-norris",
  templateUrl: "./norris.component.html",
  styleUrls: ["./norris.component.scss"],
})
export class NorrisComponent implements OnInit {
  displayedMeme?: string
  httpSubscription?: Subscription

  requestMemeFromApi() {
    return this.memHttpService
      .getDataMem()
      .subscribe((results) => (this.displayedMeme = results.value))
  }
  ngOnInit() {
    const subscription  = this.requestMemeFromApi();
    if (subscription ) {
      this.httpSubscription = subscription ;
    }
  }
  constructor(private memHttpService: MemHttpService) {}

  ngOnDestroy() {
     if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
  }}
}
