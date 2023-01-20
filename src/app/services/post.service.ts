import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly URL_API = 'http://localhost:9090/api';

  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get(`${this.URL_API}/students`);
  }

  getCourses() {
    return this.httpClient.get(`${this.URL_API}/courses`);
  }

  postStudents(student: JsonPipe) {
    return this.httpClient.post(`${this.URL_API}/student`, student);
  }

  postCourses(course: JsonPipe) {
    return this.httpClient.post(`${this.URL_API}/course`, course);
  }

  findyId(id: any) {
    return this.httpClient.get(`${this.URL_API}/student/${id}`);
  }

  deleteStudentById(id: any) {
    return this.httpClient.delete(`${this.URL_API}/student/id/${id}`);
  }

  deleteCourseById(id: any) {
    return this.httpClient.delete(`${this.URL_API}/course/${id}`);
  }
}
