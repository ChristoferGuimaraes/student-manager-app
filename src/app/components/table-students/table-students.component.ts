import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IStudentTable } from './table-student.interface';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss'],
})
export class TableStudentsComponent implements OnInit {
  @Output() title: string = 'Students';
  students: IStudentTable[] = [];
  headers: string[] = ['ID', 'Name', 'Age', 'Email'];
  entityId: string = '';

  constructor(private service: DataService) {}

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
