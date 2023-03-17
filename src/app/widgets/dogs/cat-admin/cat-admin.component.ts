import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreedService } from '../breeds/breeds.service';
import { SelectedBreedService } from '../breeds/selected-breed.service';
import { Cat } from '../interfaces/cat';
import { LocalStorageService } from './local-storage.service';


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
    private localstorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.breedService.getBreeds().subscribe(breedApi => {
      this.breedsCats = breedApi;
    });
  }

  get idCat() {
    return this.catForm.get('idCat');
  }

  onSubmit(): void {
    this.saveData();
    this.loadData();
    this.router.navigate([""]);
  }

  saveData() {
    let dataS = this.catForm.value.idCat;
    this.localstorageService.setData("defaultCatBreed", dataS);
  }

  loadData() {
    this.defaultCatBreedL = this.localstorageService.getData("defaultCatBreed") || 'abys';
    this.selectedBreed.breedSelected.next(this.defaultCatBreedL);
  }

}


