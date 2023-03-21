import { FormControl } from "@angular/forms";
import { allowedUsernames } from "./categoryNameTable";

export function allowedNames(control: FormControl) {
  if (allowedUsernames.indexOf(control.value) === -1) {
    return { nameIsForbidden: true };
  }
  return null;
}

export function noSpaceAllowed(control: FormControl) {
  if (control.value != null && control.value.indexOf(" ") != -1) {
    return { noSpaceAllowed: true };
  }
  return null;
}
