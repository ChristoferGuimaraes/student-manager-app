import { Component, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.scss'],
})
export class TableCoursesComponent implements OnInit {
  @Output() title: string = 'Courses';
  courses: any = [];
  headers: any = ['Name', 'Teacher', 'Class', 'Start Date'];
  entityId: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.service
      .getCourses()
      .subscribe((data: any) => (this.courses = data.content));
  }

  onCheckboxChange(value: any) {
    if (value.target.checked) {
      this.entityId = value.target.id;
    }
  }
}
