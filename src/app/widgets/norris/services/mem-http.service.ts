import { Injectable } from "@angular/core";
import { Post } from "../mem/interface/post.model";
import { HttpClient } from "@angular/common/http";
import { selectedMemService } from "./selectedMemObservable.service";
import { catchError, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MemHttpService {
  constructor(
    private http: HttpClient,
    private memService: selectedMemService
  ) {}

  apiForSelectedCategory: string = "https://api.chucknorris.io/jokes/random?category=";
  apiForRandomCategory: string = "https://api.chucknorris.io/jokes/random?";

  requestForApi() {
    const displError = (error: Response) => {
      console.error('Error:', error);
      throw new Error('Oops! Something went wrong while fetching the meme. Please try again later.');
    }
    if (this.memService.selectedCategory.value == "") {
      return this.http.get<Post>(`${this.apiForRandomCategory}`).pipe(
        catchError(displError)
      )
    } else {
      return this.http
        .get<Post>(
          `${this.apiForSelectedCategory}${this.memService.selectedCategory.value}`
        )
        .pipe (
          catchError(displError)
        )
    }
  }
}