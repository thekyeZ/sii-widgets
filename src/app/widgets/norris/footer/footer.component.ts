import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { selectedMemService } from "../services/selectedMemObservable.service";
import { HttpClient } from "@angular/common/http";




@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})

export class FooterComponent implements OnInit  {
  constructor(
    private selectedMemService: selectedMemService,
    private http: HttpClient
  ) {}
 
  listOfCategoriesURL: string = "https://api.chucknorris.io/jokes/categories";
  listOfCategories$ = this.http.get<string[]>(`${this.listOfCategoriesURL}`);
  categoryChanged: string = ''; 
 
  defaultValues = this.listOfCategories$[`this.categoryChanged`]
  
  
  @ViewChild ('selectedMemRef') el: ElementRef 
  
  

  onCategorySelected(value: string) {
    //przekazanie selecta (np. dev) do observable
    this.selectedMemService.selectedCategory.next(value);


   
  }

  ngOnInit() {
    this.selectedMemService.selectedCategory.subscribe((categoryName)=>{
      this.categoryChanged = categoryName
      console.log(this.categoryChanged);
      
    })
  }

setFocus() {
//  this.el.nativeElement.focus()
//  this.el.nativeElement.open()
// if (this.categoryChanged) {
//   this.el.nativeElement.focus(this.categoryChanged)


}
 



}

