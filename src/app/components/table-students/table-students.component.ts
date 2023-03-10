import { Component, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IStudent } from '../model/student.interface';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss'],
})
export class TableStudentsComponent implements OnInit {
  @Output() title: string = 'Students';
  students: IStudent[] = [];
  headers: string[] = ['ID', 'Name', 'Age', 'Email'];
  entityId: string | undefined = '';

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.getStudents().subscribe((data) => {
      data.content.forEach((student: IStudent) => {
        student.selected = false;
      });
      this.students = data.content;
    });
  }

  onCheckboxChange(value: any) {
    console.log(value)
    if (value.target.checked) {
      this.entityId = value.target.id;
    }
  }
}
