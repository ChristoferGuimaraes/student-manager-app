import { Component, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.scss']
})
export class TableCoursesComponent implements OnInit {
  @Output() title: string = "Courses";
  courses: any = [];
  headers: any = [];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getHeader()
  }

  getAllCourses(): void {
    this.service.getCourses()
      .subscribe((data: any) => this.courses = data.content);
  }

  getHeader() {
    this.service.getCourses()
      .subscribe((data: any) => {
        this.headers = Object.keys(data.content[0])

        this.formaterHeader(this.headers)
        return this.headers;
      });
  }

  formaterHeader(headers: any) {
    for (let header in headers) {
      if (headers[header] === 'name') {
        headers[header] = 'Name';
      }
      if (headers[header] === 'teacherName') {
        headers[header] = 'Teacher';
      }
      if (headers[header] === 'classNumber') {
        headers[header] = 'Class';
      }
      if (headers[header] === 'startDate') {
        headers[header] = 'Start Date'
      }
    }
    return headers;
  }


}
