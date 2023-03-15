import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { selectedMemService } from "../../services/selectedMemObservable.service";

@Component({
  selector: "app-mem-list",
  templateUrl: "./mem-list.component.html",
  styleUrls: ["./mem-list.component.scss"],
})
export class MemListComponent implements OnInit {
  @Output() httpReqToNorrisComp = new EventEmitter<Request>();
  @Input() loadMemOnPage?: string;

  loadData() {
    const localStorageData: any = localStorage.getItem("form-data");
    const convertToJSON = JSON.parse(localStorageData);

    console.log(localStorageData);
    console.log(convertToJSON.categoryName);

    this.selectedMem.selectedCategory.next(convertToJSON.categoryName);
  }

  sendData() {
    this.httpReqToNorrisComp.emit();
  }

  constructor(private selectedMem: selectedMemService) {}

  ngOnInit(): void {}
}
