import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private urlStudents = 'http://localhost:9090/api/students';
  private urlStudentsPost = 'http://localhost:9090/api/student';
  private urlCourses = 'http://localhost:9090/api/courses';
  private urlCoursesPost = 'http://localhost:9090/api/course';

  constructor(private httpClient: HttpClient) { }

  getStudents(){
    return this.httpClient.get(this.urlStudents);
  }

  getCourses() {
    return this.httpClient.get(this.urlCourses)
  }

  postStudents(student: JsonPipe){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.urlStudentsPost, student, {headers: headers}).pipe()
  }

  postCourses(course: JsonPipe){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.urlCoursesPost, course, {headers: headers}).pipe()
  }
}
