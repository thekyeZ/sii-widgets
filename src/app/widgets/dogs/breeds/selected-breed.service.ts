import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../cat-admin/local-storage-cat.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedBreedService {

  //ROZWIAZANIE 1 - NIE DZIALA DEFAULT 

  defaultCatBreedStoragedValue = this.localStorageServ.getItem('defaultCatBreed');

  default = 'abys';

  breedSelected: BehaviorSubject<string> = new BehaviorSubject(this.defaultCatBreedStoragedValue || 'abys');


  constructor(
    private localStorageServ: LocalStorageService
  ) { console.log(this.defaultCatBreedStoragedValue);
  }


  // ROZWIAZANIE 2 PO REFRESH breedSelected is undefined

  // breedSelected: BehaviorSubject<string>;

  //  constructor(
  //   // private localStorageServ: LocalStorageService 
  //  ){
  //   const defaultCatBreedStoragedValue = localStorage.getItem('defaultCatBreed');

  //   this.breedSelected = new BehaviorSubject<string>(defaultCatBreedStoragedValue || 'abys');
  //  }

  //ROZWIAZANIE 3 

  //   breedSelected: BehaviorSubject<string> = new BehaviorSubject<string>('abys');

  //  constructor(
  //  ){
  //   const defaultCatBreedStoragedValue = localStorage.getItem('defaultCatBreed');
  // if(defaultCatBreedStoragedValue === null) {
  //   this.breedSelected = new BehaviorSubject<string>(defaultCatBreedStoragedValue);
  //  } else {
  //   this.breedSelected = new BehaviorSubject<string>('abys')
  //  }

  // }

  // ROZWIAZANIE 4 SAME 1 ST SOLUTION (DEFAULT)

 
  //   default ='abys';

  //   breedSelected: BehaviorSubject<string>;

  //   constructor(
  //     private localStorageServ: LocalStorageService
  //   ){ 
  //     const defaultCatBreedStoragedValue= this.localStorageServ.getItem('defaultCatBreed');

  //     if(defaultCatBreedStoragedValue === defaultCatBreedStoragedValue.typeOf(Object)) {
  //       this.breedSelected = new BehaviorSubject<string>(this.default)
  //       console.log(this.default);
        
  //       } else {
  //       this.breedSelected = new BehaviorSubject<string>(defaultCatBreedStoragedValue)
      
  //       }
  // }
}



