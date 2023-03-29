import { FormControl } from "@angular/forms";

export interface CustomValidator {
  (control: FormControl): { [key: string]: any } | null;
}
