import { Component, OnInit } from "@angular/core";
import { selectedMemService } from "../services/selectedMemObservable.service";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    private selectedMemService: selectedMemService,
    private http: HttpClient
  ) {
    this.categoryChanged = null;
    this.subscription = undefined;
  }

  listOfCategoriesURL: string = "https://api.chucknorris.io/jokes/categories";
  listOfCategories$: Observable<string[]> = this.http.get<string[]>(`${this.listOfCategoriesURL}`);
  categoryChanged: string | null;
  subscription: Subscription | undefined;

  onCategorySelected(value: string): void {
    this.selectedMemService.selectedCategory.next(value);
  }

  ngOnInit(): void {
    this.subscription = this.selectedMemService.selectedCategory.subscribe(
      (categoryName: string) => (this.categoryChanged = categoryName)
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

