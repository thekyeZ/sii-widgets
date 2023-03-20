import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { selectedMemService } from "../../services/selectedMemObservable.service";
import { LocalStorageService } from "../../services/local-storage.service";
import { allowedNames, noSpaceAllowed } from "./utils/validators";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  simpleForm?: FormGroup;
  isSubmitted: boolean = false;
  user?: { id?: string; category?: string };

  ngOnInit() {
    this.simpleForm = new FormGroup({
      categoryName: new FormControl<string>("", [
        Validators.required,
        allowedNames.bind(this),
        noSpaceAllowed.bind(this),
      ]),
    });
    this.user = {
      id: this.route.snapshot.params["id"],
      category: this.route.snapshot.params["category"],
    };
  }

  //Buttons
  onSubmit() {
    this.isSubmitted = true;

    if (this.simpleForm?.invalid) {
      return;
    } else {
      this.selectedMemService.selectedCategory.next(
        this.simpleForm?.get("categoryName")?.value
      );
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const stringifySimpleForm = JSON.stringify(this.simpleForm?.value);
    this.localStorageService.saveInLocalStorage(
      "categoryValue",
      stringifySimpleForm
    );
  }

  //Navigation links
  navigateToMainPage() {
    this.router.navigate([""]);
  }

  //Constructor
  constructor(
    private router: Router,
    private selectedMemService: selectedMemService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}
}
