import { Component } from '@angular/core';
import { mockedAuthorsList, mockedCoursesList } from '@app/shared/mocks/mock';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  courses = mockedCoursesList;
  authors = mockedAuthorsList;

  getAuthorsByIds(authorIds: string[]): string {
    return this.authors
      .filter(author => authorIds.includes(author.id))
      .map(author => author.name)
      .join(', ');
  }
}