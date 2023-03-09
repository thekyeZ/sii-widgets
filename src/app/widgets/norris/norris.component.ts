import { Component, OnInit } from "@angular/core";
import { MemHttpService } from "./services/mem-http.service";

@Component({
  selector: "app-norris",
  templateUrl: "./norris.component.html",
  styleUrls: ["./norris.component.scss"],
})
export class NorrisComponent implements OnInit {
  memToDispFromHttpCall?: string;

  // call http request from MemHttpService, if user click button ("losuj") call http request from MemHttpService
  requestHttp() {
    this.memService.requestForApi().subscribe((results) => {
      this.memToDispFromHttpCall = results.value;
    });
  }

  // Load mem on page start
  ngOnInit() {
    this.requestHttp();
  }
  constructor(private memService: MemHttpService) {}
}
