import { Component, Input } from "@angular/core";
import { Course } from "@app/types";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent {
  @Input() courses: Course[] = [];
  @Input() editable: boolean = false;
  faEdit = faEdit;
  feDelete = faTrash;
}
