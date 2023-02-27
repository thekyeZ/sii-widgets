import { Injectable } from "@angular/core";
import { Post } from "../mem/interface/post.model";
import { HttpClient } from "@angular/common/http";
import { MemDataValueService } from "./selectedMemObservable.service";

@Injectable({
  providedIn: "root",
})
export class MemHttpServiceService {
  constructor(
    private http: HttpClient,
    private selectedMem: MemDataValueService
  ) {}

  selectedApi: string = "https://api.chucknorris.io/jokes/random?category=";
  randomApi: string = "https://api.chucknorris.io/jokes/random?";

  requestPosts() {
    if (!this.selectedMem.selectedCategory.value) {
      return this.http.get<Post>(`${this.randomApi}`);
    } else
      return this.http.get<Post>(
        `${this.selectedApi}${this.selectedMem.selectedCategory.value}`
      );
  }
}

