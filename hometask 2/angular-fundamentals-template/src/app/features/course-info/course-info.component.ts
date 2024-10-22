import { Component, OnInit } from '@angular/core';
import { mockedAuthorsList,mockedCoursesList } from '@app/shared/mocks/mock';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  course: any; // Course data to be displayed
  authors: string[] = []; // Author names

  ngOnInit(): void {
    // Here, selecting the first course from the mock list as an example
    this.course = mockedCoursesList[0];

    // Fetching author names for the course
    this.authors = this.course.authors.map((authorId: string) => {
      const author = mockedAuthorsList.find((a) => a.id === authorId);
      return author ? author.name : 'Unknown Author';
    });
  }
}