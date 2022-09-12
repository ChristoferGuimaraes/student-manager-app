import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss']
})
export class TableStudentsComponent implements OnInit {
  students: any = [];
  headers: any = [];

  constructor(private service: PostService) { }


  ngOnInit(): void {
    this.getAllStudents();
    this.getHeader();
  }

  getHeader() {
    this.service.getStudents()
      .subscribe((data: any) => {
        this.headers = Object.keys(data.content[0]).slice(0, 5);

        this.formaterHeader(this.headers);
        return this.headers;
      });
  }

  formaterHeader(headers: any) {
    for (let header in headers) {
      if (headers[header] === 'id') {
        headers[header] = 'ID';
      }
      if (headers[header] === 'firstName') {
        headers[header] = 'First Name';
      }
      if (headers[header] === 'lastName') {
        headers[header] = 'Last Name';
      }
      if (headers[header] === 'age') {
        headers[header] = 'Age'
      }
      if (headers[header] === 'email') {
        headers[header] = 'Email'
      }
    }
    return headers;
  }

  getAllStudents() {
    this.service.getStudents().subscribe((data: any) => this.students = data.content);
  }
}
