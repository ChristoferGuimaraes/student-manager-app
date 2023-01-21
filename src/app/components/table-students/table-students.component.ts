import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss'],
})
export class TableStudentsComponent implements OnInit {
  @Output() title: string = 'Students';
  students: any = [];
  headers: any = ['ID', 'Name', 'Age', 'Email'];
  entityId: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.getStudents().subscribe((data: any) => {
      data.content.forEach((student: any) => {
        student.selected = false;
      });
      this.students = data.content;
    });
  }

  onCheckboxChange(value: any) {
    if (value.target.checked) {
      this.entityId = value.target.id;
    }
  }
}
