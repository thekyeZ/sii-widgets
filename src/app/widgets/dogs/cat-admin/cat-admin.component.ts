import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreedService } from '../breeds/breeds.service';
import { SelectedBreedService } from '../breeds/selected-breed.service';
import { Cat } from '../interfaces/cat';

@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit{
  breedsCats: Cat[]= []
 
  catForm: FormGroup = new FormGroup({
    'idCat': new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.breedService.getBreeds().subscribe(breedApi => {        
      this.breedsCats = breedApi;
      console.log(this.breedsCats);
      });
  }

  constructor(
  private selectedBreed: SelectedBreedService,
  private breedService: BreedService,
  private router: Router) {}

  changeBreed(e: any) {
    this.idCat?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get idCat() {
    return this.catForm.get('idCat');
  }
  onSubmit(): void {
      this.selectedBreed.breedSelected.next(this.catForm.value.idCat!);
      console.log(this.catForm.value.idCat);
          this.router.navigate([""]);
    }
  }


