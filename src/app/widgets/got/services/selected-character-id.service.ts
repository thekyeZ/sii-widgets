import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class SelectedCharacterIdService {
  selectedCharacterId: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}
}
