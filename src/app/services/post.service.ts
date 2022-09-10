import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private urlStudents = 'http://localhost:9090/api/students';
  private urlCourses = 'http://localhost:9090/api/courses';
   
  constructor(private httpClient: HttpClient) { }
  
  getStudents(){
    return this.httpClient.get(this.urlStudents);
  }

  getCourses() {
    return this.httpClient.get(this.urlCourses)
  }
  
}