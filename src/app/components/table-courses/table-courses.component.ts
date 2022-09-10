import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.scss']
})
export class TableCoursesComponent implements OnInit { 
  courses: any = []; 
  headers: any = []; 
  
  constructor(private service: PostService) { } 
  
  ngOnInit(): void { 
    this.getAllCourses(); 
    this.getHeader()
  } 
  
  getHeader() {
    this.service.getCourses().subscribe((data: any) => this.headers = Object.keys(data.content[0])); 
  }

  getAllCourses() { 
    this.service.getCourses().subscribe((data: any) => this.courses = data.content); 
  } 
}
