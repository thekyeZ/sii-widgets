import { Injectable } from "@angular/core";
import { Post } from "../mem/interface/post.model";
import { HttpClient } from "@angular/common/http";
import { selectedMemService } from "./selectedMemObservable.service";

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
    // choose this api if user select random cathegory (selectValue = "random")
          if (this.memService.selectedCategory.value === "") {
              return this.http.get<Post>(`${this.apiForRandomCategory}`);


    } else {
      
  // choose this api if user select other cathegory (selectValue = "selectCathegory")
           return this.http.get<Post>(
              `${this.apiForSelectedCategory}${this.memService.selectedCategory.value}`
      );
    }
  }
}
