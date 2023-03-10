import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.scss'],
})
export class TableCoursesComponent implements OnInit {
  @Output() title: string = 'Courses';
  courses: any = [];
  headers: string[] = ['Name', 'Teacher', 'Class', 'Start Date'];
  entityId: string = '';

  constructor(private service: DataService) {}

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
