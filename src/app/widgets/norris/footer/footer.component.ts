import { Component, OnInit } from "@angular/core";
import { selectedMemService } from "../services/selectedMemObservable.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  listOfCategoriesURL: string = "https://api.chucknorris.io/jokes/categories";
  listOfCategories$ = this.http.get<string[]>(`${this.listOfCategoriesURL}`);

  constructor(
    private selectedMemService: selectedMemService,
    private http: HttpClient
  ) {}

  onCategorySelected(value: string) {
    //przekazanie selecta (np. dev) do observable
    this.selectedMemService.selectedCategory.next(value);
    console.log(this.selectedMemService.selectedCategory.value);

    //complete task
    // this.selectedMemService.selectedCategory.complete();
  }

  ngOnInit() {}
}
