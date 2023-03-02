import { Component, OnInit } from "@angular/core";
import { MemDataValueService } from "../services/selectedMemObservable.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  selectedTeam = "";
  API: string = "https://api.chucknorris.io/jokes/categories";

  listOfCategories$ = this.http.get<string[]>(`${this.API}`);

  constructor(
    private memDataValueService: MemDataValueService,
    private http: HttpClient
  ) { }



  onCategorySelected(value: string) {
    //przekazanie selecta (np. dev) do observable
    this.memDataValueService.selectedCategory.next(value);
    console.log(this.memDataValueService.selectedCategory.value);

    //complete task
    this.memDataValueService.selectedCategory.complete();
  }

  
  ngOnInit() {
    this.memDataValueService.selectedCategory.subscribe(selectedMem => {
      this.selectedTeam = selectedMem 
    })
  }

}
