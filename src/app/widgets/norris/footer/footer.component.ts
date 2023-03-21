import { Component, OnInit } from "@angular/core";
import { selectedMemService } from "../services/selectedMemObservable.service";
import { HttpClient } from "@angular/common/http";
import { Subscription } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    private selectedMemService: selectedMemService,
    private http: HttpClient
  ) {}

  listOfCategoriesURL: string = "https://api.chucknorris.io/jokes/categories";
  listOfCategories$ = this.http.get<string[]>(`${this.listOfCategoriesURL}`);
  categoryChanged?: string = "";
  subscription?: Subscription;

  onCategorySelected(value: string) {
    this.selectedMemService.selectedCategory.next(value);
  }

  ngOnInit() {
    this.subscription = this.selectedMemService.selectedCategory.subscribe(
      (categoryName) => (this.categoryChanged = categoryName)
    );
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
