import { Component,Input  } from '@angular/core';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: any;  // Declare course as an input property
  @Input() authors?: string; // Authors list passed in as well
}
