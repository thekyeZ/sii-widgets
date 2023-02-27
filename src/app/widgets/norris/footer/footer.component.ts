import { Component, OnInit } from '@angular/core';
import { FooterHttpService1Service } from '../services/footerHttpCall';
import { MemDataValueService } from '../services/selectedMemObservable.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})



export class FooterComponent implements OnInit {
  listOfCategories:string[] = [];
  selectedCategory:object
  selectedTeam = '';


  
  constructor (
    private listOfMemCategoriesService: FooterHttpService1Service,
    private memDataValueService:MemDataValueService,
   ) {}

  ngOnInit() {
    this.requestApi()
  }

  requestApi() {
   this.listOfMemCategoriesService.requestApi()
     .subscribe((results) => {
        this.listOfCategories.push(...results)
        console.log(this.listOfCategories);
      })
    }
    onCategorySelected(value:string) {
      // wyświetl obok paragrafu selecta
      this.selectedTeam = value

      //przekazanie selecta (np. dev) do observable
      this.memDataValueService.selectedCategory.next(value)
      console.log(this.memDataValueService.selectedCategory.value);
    }



  }

