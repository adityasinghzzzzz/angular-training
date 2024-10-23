import { NgModule } from "@angular/core";
import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "@app/shared/shared.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, SharedModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
