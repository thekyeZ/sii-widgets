import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  constructor(
    private router: Router,
    private selectedMemService: selectedMemService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder // Add form builder to constructor
  ) {}

  ngOnInit() {
    this.simpleForm = this.formBuilder.group({
      categoryName: [
        "",
        Validators.compose([
          Validators.required,
          allowedNames.bind(this),
          noSpaceAllowed.bind(this),
        ]),
      ],
    });
  }

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

  navigateToMainPage() {
    this.router.navigate(["/"]);
  }
}
