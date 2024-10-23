import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./features/courses/courses.component";
import {
  CourseFormComponent,
  LoginFormComponent,
  RegistrationFormComponent,
} from "./shared/components";

export const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
  },
  {
    path: "login",
    component: LoginFormComponent,
  },
  { path: "registration", component: RegistrationFormComponent },
  {
    path: "course-form",
    component: CourseFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoitingModule {}
