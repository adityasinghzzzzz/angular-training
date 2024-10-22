import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input() title!: string; // Declare the input property for title
  @Input() text!: string;  // Declare the input property for text
}
// Use the names `title` and `text`.
