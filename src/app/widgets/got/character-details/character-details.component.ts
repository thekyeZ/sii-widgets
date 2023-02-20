import { Component, Input } from "@angular/core";
import { Character } from "../interfaces/Character";
@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.scss"],
})
export class CharacterDetailsComponent {
  @Input() characterDetails!: Character;
}
