import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-mem-list",
  templateUrl: "./mem-list.component.html",
  styleUrls: ["./mem-list.component.scss"],
})
export class MemListComponent implements OnInit {
  @Output() httpReqToNorrisComp = new EventEmitter<string>();
  @Input() loadMemOnPage;

  sendData() {
    this.httpReqToNorrisComp.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
