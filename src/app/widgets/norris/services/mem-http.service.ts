import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { selectedMemService } from "./selectedMemObservable.service";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Post } from "../mem/interface/post.model";

@Injectable({
  providedIn: "root",
})
export class MemHttpService {
  private readonly apiBase = "https://api.chucknorris.io/jokes/";

  constructor(
    private http: HttpClient,
    private memService: selectedMemService
  ) {}

  private getApiUrl(): string {
    const selectedCategory = this.memService.selectedCategory.value;

    if (selectedCategory) {
      return `${this.apiBase}random?category=${selectedCategory}`;
    } else {
      return `${this.apiBase}random`;
    }
  }

  private handleError(error: string): Observable<never> {
    console.error("Error:", error);
    return throwError(() => new Error(
      "Oops! Something went wrong while fetching the meme. Please try again later."
    ));
  }

  getDataMem(): Observable<Post> {
    const url = this.getApiUrl();

    return this.http.get<Post>(url).pipe(
      map((response) => {
        if (response && response.value) {
          return response;
        } else {
          throw new Error("Invalid response format");
        }
      }),
      catchError((error) => this.handleError(error))
    );
  }
}