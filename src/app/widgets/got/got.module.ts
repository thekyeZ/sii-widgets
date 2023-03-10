import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GotComponent } from "./got.component";
import { ListOfCharactersComponent } from "./list-of-characters/list-of-characters.component";
import { HeaderComponent } from "./header/header.component";
import { CharacterComponent } from "./list-of-characters/character/character.component";
import { HttpClientModule } from "@angular/common/http";
import { SelectedCharacterComponent } from "./selected-character/selected-character.component";
import { BooksComponent } from "./books/books.component";
import { HousesComponent } from "./houses/houses.component";
import { Routes, RouterModule } from "@angular/router";
import { CharactersService } from "./services/characters.service";
import { SelectedCharacterIdService } from "./services/selected-character-id.service";
import { AdminComponent } from "./admin/admin.component";
import { CharactersComponent } from "./characters/characters.component";
import { HomeGotComponent } from "./home-got/home-got.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ReactiveFormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "", component: HomeGotComponent },
  { path: "admin/got", component: AdminComponent },
  // { path: "admin/got/:characterId", component: AdminComponent },
  { path: "characters", component: CharactersComponent },
  { path: "books", component: BooksComponent },
  { path: "houses", component: HousesComponent },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
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
    HomeGotComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  exports: [GotComponent, RouterModule],
  providers: [CharactersService, SelectedCharacterIdService],
})
export class GotModule {}
