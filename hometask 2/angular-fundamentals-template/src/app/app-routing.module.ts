import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './features/courses/courses-list/courses-list.component';
import { CourseInfoComponent } from './features/course-info/course-info.component';


const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'course-info/:id', component: CourseInfoComponent }, // Pass the course ID
  { path: '**', redirectTo: 'courses' } // Redirect to courses for any unmatched route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}