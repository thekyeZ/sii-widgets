import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { selectedMemService } from "../../services/selectedMemObservable.service";
import { MemHttpService } from "../../services/mem-http.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  signupForm: FormGroup;
  submited: boolean = false;
  user: { id: number; category: string };

  allowedUsernames = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
  ];

  ngOnInit() {
    this.signupForm = new FormGroup({
      categoryName: new FormControl(null, [
        Validators.required,
        this.allowedNames.bind(this),
        this.noSpaceAllowed.bind(this),
      ]),
    });
    this.user = {
      id: this.route.snapshot.params["id"],
      category: this.route.snapshot.params["category"],
    };
  }

  //Validators
  allowedNames(control: FormControl): { [s: string]: boolean } {
    if (this.allowedUsernames.indexOf(control.value) === -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  noSpaceAllowed(control: FormControl): { [s: string]: boolean } {
    if (control.value != null && control.value.indexOf(" ") != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }

  //Buttons
  onSubmit() {
    this.submited = true;

    if (this.signupForm.invalid) {
      return;
      
    } else {
      this.selectedMemService.selectedCategory.next(
        this.signupForm.get("categoryName").value
      );
      console.log(this.signupForm);
    }
  }

  //Navigation links
  navigateToMainPage() {
    this.router.navigate([""]);
  }

  //Constructor
  constructor(
    private router: Router,
    private selectedMemService: selectedMemService,
    private memHttpService: MemHttpService,
    private route: ActivatedRoute
  ) {}
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { selectedMemService } from '../../services/selectedMemObservable.service';
// import { MemHttpService } from '../../services/mem-http.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.scss'],

// })
// export class AdminComponent implements OnInit {
//   signupForm: FormGroup
//   user: {id: number, category:string}
//   allowedUsernames: string[] = ['Chris', 'Anna']

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'categoryName': new FormControl(null, [Validators.required, this.allowedNames.bind(this)] ),
//     })
//     this.user = {
//       id: this.route.snapshot.params['id'],
//       category: this.route.snapshot.params['category']
//     }
//   }

//   onSubmit(){
//     // weź wartość z inputa, wstaw ją do observable, zrenderuj
//     this.signupForm.get('categoryName').valueChanges;
//     console.log( this.signupForm.get('categoryName').value);

//     this.selectedMemService.selectedCategory.next(this.signupForm.get('categoryName').value)
//     this.requestHttp()
//   }

//   constructor (
//     private router: Router,
//     private selectedMemService: selectedMemService,
//     private memHttpService: MemHttpService,
//     private route: ActivatedRoute
//     ) {}

//   navigateToMainPage(){
//     this.router.navigate([''])
//   }

// allowedNames( control: FormControl): {[s: string]: boolean}  {
//   if (this.allowedNames.indexOf(control.value) !== -1 ) {
//     return {'nameIsForbidden': true}
//   }
//     return null
// }

// }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { selectedMemService } from '../../services/selectedMemObservable.service';
// import { MemHttpService } from '../../services/mem-http.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.scss'],

// })
// export class AdminComponent implements OnInit {
//   signupForm: FormGroup
//   user: {id: number, category:string}
//   allowedUsernames = ['Chris', 'Anna']

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'categoryName': new FormControl(null, Validators.required)
//     })
//     this.user = {
//       id: this.route.snapshot.params['id'],
//       category: this.route.snapshot.params['category']
//     }
//   }

//   onSubmit(){
//     this.selectedMemService.selectedCategory.next(this.signupForm.get('categoryName').value)

//   }

//   constructor (
//     private router: Router,
//     private selectedMemService: selectedMemService,
//     private memHttpService: MemHttpService,
//     private route: ActivatedRoute
//     ) {}

//   navigateToMainPage(){
//     this.router.navigate([''])
//   }

//   requestHttp() {
//     this.memHttpService.requestForApi().subscribe((results) => {
//      return results
//     });

// }
// }
