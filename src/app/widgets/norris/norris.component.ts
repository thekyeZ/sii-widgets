import { Component, OnInit } from "@angular/core";
import { Subscribable, Subscriber } from "rxjs";
import { MemHttpService } from "./services/mem-http.service";

@Component({
  selector: "app-norris",
  templateUrl: "./norris.component.html",
  styleUrls: ["./norris.component.scss"],
})
export class NorrisComponent implements OnInit {
  memToDisplay?: string;

  // call http request from MemHttpService, if user click button ("losuj") call http request from MemHttpService
  requestHttp() {
   return this.memService.requestForApi().subscribe( results => this.memToDisplay = results.value );
  }
  //loadMemOnPage
  ngOnInit() {
   this.requestHttp();
  
  }
  
  constructor(private memService: MemHttpService) {}

  ngOnDestroy() {
    this.requestHttp().unsubscribe()
  }
}
