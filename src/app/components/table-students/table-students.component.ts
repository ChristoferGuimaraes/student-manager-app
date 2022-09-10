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
    this.service.getStudents().subscribe((data: any) => this.headers = Object.keys(data.content[0]).slice(0, 5)); 
  }
  
  getAllStudents() { 
    this.service.getStudents().subscribe((data: any) => this.students = data.content); 
  } 
}