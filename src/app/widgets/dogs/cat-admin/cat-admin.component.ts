import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreedService } from '../breeds/breeds.service';

@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit{
  catForm: FormGroup = new FormGroup({
    'idCat': new FormControl(null, Validators.required)
  });

constructor(
  private router: Router,
  private breedsService: BreedService
) {}

onSubmit(){
  console.log(this.catForm.value.idCat);

  this.breedsService.breedSelected.next(this.catForm.value.idCat)
  
console.log(this.breedsService.breedSelected.value);
this.router.navigate([""]);
}

ngOnInit() {
}
}

