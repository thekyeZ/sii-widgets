import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectedBreedService } from '../breeds/selected-breed.service';

@Component({
  selector: 'app-cat-admin',
  templateUrl: './cat-admin.component.html',
  styleUrls: ['./cat-admin.component.scss']
})
export class CatAdminComponent implements OnInit {
  catForm: FormGroup = new FormGroup({
    'idCat': new FormControl(null, [Validators.required])
  });

  constructor(
    private router: Router,
    private selectedBreed: SelectedBreedService
  ) { }

  onSubmit() {
    this.selectedBreed.breedSelected.next(this.catForm.value.idCat)
    this.router.navigate([""]);
  }

  ngOnInit() {
  }
}

