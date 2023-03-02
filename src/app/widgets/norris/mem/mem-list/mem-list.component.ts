import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-mem-list",
  templateUrl: "./mem-list.component.html",
  styleUrls: ["./mem-list.component.scss"],
})
export class MemListComponent implements OnInit {
  @Output() sendedData = new EventEmitter<string>();
  @Input() giveMeMem;

  sendData() {
    this.sendedData.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
