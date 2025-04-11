import { Component } from '@angular/core';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {MainComponent} from './layouts/main/main.component';
import {FooterComponent} from './layouts/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ofw-reborn';
}
