import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '');
  const isWhitespace = value.trim().length === 0;
  debugger;
  return isWhitespace ? { whitespace: true } : null;
}
