import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BreedService } from '../breeds/breeds.service';
import { SelectedBreedService } from '../breeds/selected-breed.service';
import { Cat } from '../interfaces/cat';
import { LocalStorageService } from './local-storage.service';


@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit, OnDestroy {
  breedsCats: Cat[] = [];
  catForm!: FormGroup;
  defaultCatBreed!: string;
  adminSubscribe!: Subscription;

  constructor(
    private selectedBreed: SelectedBreedService,
    private breedService: BreedService,
    private router: Router,
    private localstorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.catForm = new FormGroup({
      'idCat': new FormControl(this.localstorageService.getData("defaultCatBreed") || '', [Validators.required]),
      'inputCat': new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(4), this.checkIfExist])
    });

    this.adminSubscribe = this.breedService.getBreeds().subscribe(breedApi => {
      this.breedsCats = breedApi;
    });
  }

  get idCat() {
    return this.catForm.get('idCat');
  }
  get inputCat() {
    return this.catForm.get('inputCat')
  }

  onSubmit(): void {
    this.saveData();
    this.loadData();
    this.router.navigate([""]);
  }

  saveData() {
    let dataS = this.catForm.value.idCat;
    this.localstorageService.setData("defaultCatBreed", dataS);

    let inputData = this.catForm.value.inputCat;
    this.localstorageService.setData("inputCatStorage", inputData);

  }

  loadData() {
    this.defaultCatBreed = this.localstorageService.getData("defaultCatBreed") || '';
    this.selectedBreed.breedSelected.next(this.defaultCatBreed);
  }

  ngOnDestroy() {
    this.adminSubscribe.unsubscribe();
  }

  checkIfExist = (control: FormControl): { [key: string]: boolean } | null => {
    const inputCat = control.value;

    if (inputCat && this.breedsCats.some(cat => cat.id === inputCat)) {
      return null;
    } else {
      return { 'notExist': true };
    }
  }


}


