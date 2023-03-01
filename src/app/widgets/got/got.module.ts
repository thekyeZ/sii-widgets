import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GotComponent } from "./got.component";
import { ListOfCharactersComponent } from "./list-of-characters/list-of-characters.component";
import { HeaderComponent } from "./header/header.component";
import { CharacterComponent } from "./character/character.component";
import { HttpClientModule } from "@angular/common/http";
import { SelectedCharacterComponent } from "./selected-character/selected-character.component";

import { CharactersService } from "./services/characters.service";
import { SelectedCharacterIdService } from "./services/selected-character-id.service";
@NgModule({
  declarations: [
    GotComponent,
    ListOfCharactersComponent,
    HeaderComponent,
    CharacterComponent,
    SelectedCharacterComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [GotComponent],
  providers: [CharactersService, SelectedCharacterIdService],
})
export class GotModule {}
