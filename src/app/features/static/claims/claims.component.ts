import { Component } from '@angular/core';

@Component({
  selector: 'app-claims',
  imports: [],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css'
})
export class ClaimsComponent {
  scrollToSection() {
    const element = document.getElementById('list-of-documents');
    if (element) {
      const yOffset = -60; // adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
