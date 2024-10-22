import { Component } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from '@app/shared/mocks/mock';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = mockedCoursesList;
  authors = mockedAuthorsList;

  getAuthorsByIds(authorIds: string[]): string {
    return this.authors
      .filter(author => authorIds.includes(author.id))
      .map(author => author.name)
      .join(', ');
  }
}
