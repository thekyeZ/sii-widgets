import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalService } from "./local.service";
@Injectable({
  providedIn: "root",
})
export class SelectedCharacterIdService {
  selectedCharacterId: BehaviorSubject<number>;
  constructor(private localStore: LocalService) {
    this.selectedCharacterId = new BehaviorSubject(
      parseInt(this.localStore.getData("id") || "0")
    );
  }
}
