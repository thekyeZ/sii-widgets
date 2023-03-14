import { Component, OnInit } from "@angular/core";
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
    this.memService.requestForApi().subscribe((results) => {
      this.memToDisplay = results.value;
    });
  }

  
  ngOnInit() {
    const loadMemOnPage = this.requestHttp();
    loadMemOnPage
  }
  constructor(private memService: MemHttpService) {}
}
