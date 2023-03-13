import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-mem-list",
  templateUrl: "./mem-list.component.html",
  styleUrls: ["./mem-list.component.scss"],
})
export class MemListComponent implements OnInit {
  @Output() httpReqToNorrisComp = new EventEmitter<Request>();
  @Input() loadMemOnPage?: string;

  sendData() {
    this.httpReqToNorrisComp.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
