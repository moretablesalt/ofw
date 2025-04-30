import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BUILD_INFO } from '../../../environments/build-info';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  protected readonly environment = environment;
  protected readonly BUILD_INFO = BUILD_INFO;
}
