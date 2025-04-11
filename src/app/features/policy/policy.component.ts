import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {StepsComponent} from '../shared/steps/steps.component';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-policy',
  imports: [
    RouterOutlet,
    StepsComponent,
  ],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent {
}
