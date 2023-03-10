import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreedService } from '../breeds/breeds.service';
import { SelectedBreedService } from '../breeds/selected-breed.service';
import { Cat } from '../interfaces/cat';

@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit {
  catForm: FormGroup = new FormGroup({
    'idCat': new FormControl(null, [Validators.required])
  });
  breedsCats: Cat[]= []

  constructor(
    private router: Router,
    private selectedBreed: SelectedBreedService,
    private breedService: BreedService
  ) { }

  onSubmit() {
    this.selectedBreed.breedSelected.next(this.catForm.value.idCat)
    this.router.navigate([""]);
  }
 
  ngOnInit() {
    this.breedService.getBreeds().subscribe(breedApi => {        
      this.breedsCats = breedApi;
      console.log(this.breedsCats);
      });
    
  }

}

