import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss']
})
export class TableStudentsComponent implements OnInit {
  students: any = [];
  headers: any = ["ID", "Name", "Age", "Email"];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.getStudents().subscribe((data: any) => this.students = data.content);
  }
}
