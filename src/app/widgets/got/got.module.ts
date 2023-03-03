import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GotComponent } from "./got.component";
import { ListOfCharactersComponent } from "./list-of-characters/list-of-characters.component";
import { HeaderComponent } from "./header/header.component";
import { CharacterComponent } from "./character/character.component";
import { HttpClientModule } from "@angular/common/http";
import { SelectedCharacterComponent } from "./selected-character/selected-character.component";
import { BooksComponent } from "./books/books.component";
import { HousesComponent } from "./houses/houses.component";
import { Routes, RouterModule } from "@angular/router";

import { CharactersService } from "./services/characters.service";
import { SelectedCharacterIdService } from "./services/selected-character-id.service";
import { AdminComponent } from "./admin/admin.component";
import { CharactersComponent } from "./characters/characters.component";

const appRoutes: Routes = [
  { path: " ", component: GotComponent },
  { path: "admin/got", component: AdminComponent },
  { path: "characters", component: CharactersComponent },
  { path: "books", component: BooksComponent },
  { path: "houses", component: HousesComponent },
];
@NgModule({
  declarations: [
    GotComponent,
    ListOfCharactersComponent,
    HeaderComponent,
    CharacterComponent,
    SelectedCharacterComponent,
    BooksComponent,
    HousesComponent,
    AdminComponent,
    CharactersComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  exports: [GotComponent, RouterModule],
  providers: [CharactersService, SelectedCharacterIdService],
})
export class GotModule {}
