import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {

  downloadCompulsory() {
    const link = document.createElement('a');
    link.href = 'assets/Compulsory.pdf'; // or an absolute URL
    link.download = 'Compulsory.pdf';
    link.click();
  }

  downloadRehires() {
    const link = document.createElement('a');
    link.href = 'assets/Rehires.pdf'; // or an absolute URL
    link.download = 'Rehires.pdf';
    link.click();
  }

  downloadFamilyShield() {
    const link = document.createElement('a');
    link.href = 'assets/FamilyShield.pdf'; // or an absolute URL
    link.download = 'FamilyShield.pdf';
    link.click();
  }
}
