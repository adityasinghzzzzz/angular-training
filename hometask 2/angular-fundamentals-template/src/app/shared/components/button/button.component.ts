import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonText: string='Default Button'; // Declare buttonText as an input property
  @Input() iconName?: string;    // Declare iconName as an input property
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    console.log('Button Component Initialized', this.buttonText);
  }
}