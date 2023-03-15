import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreedService } from '../breeds/breeds.service';
import { SelectedBreedService } from '../breeds/selected-breed.service';
import { Cat } from '../interfaces/cat';
import { LocalStorageService } from './local-storage-cat.service';

@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit {
  breedsCats: Cat[] = []
  catForm: FormGroup = new FormGroup({
    'idCat': new FormControl('', [Validators.required])
  });

  defaultCatBreedL!: string;

  constructor(
    private selectedBreed: SelectedBreedService,
    private breedService: BreedService,
    private router: Router,
    private admin: LocalStorageService,
  ) { }

  ngOnInit() {
    this.breedService.getBreeds().subscribe(breedApi => {
      this.breedsCats = breedApi;
      // console.log(this.breedsCats);
    });
  }

  changeBreed(e: any) {
    this.idCat?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get idCat() {
    return this.catForm.get('idCat');
  }

  onSubmit(): void {
    // console.log(this.catForm.value.idCat);
    this.saveData();
    this.loadData();
    this.router.navigate([""]);

  }

  saveData(){
    let dataS = this.catForm.value.idCat;
    this.admin.setItem("defaultCatBreed", dataS);
  }
  loadData() {
    this.defaultCatBreedL = this.admin.getItem("defaultCatBreed");
    this.selectedBreed.breedSelected.next(this.defaultCatBreedL);
    console.log(this.defaultCatBreedL);
    
  }

}


