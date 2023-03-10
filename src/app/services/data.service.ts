import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CourseResponse, StudentResponse } from './model/response.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly URL_API = 'http://localhost:9090/api';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<StudentResponse> {
    return this.httpClient.get<StudentResponse>(`${this.URL_API}/students`);
  }

  getCourses(): Observable<CourseResponse>{
    return this.httpClient.get<CourseResponse>(`${this.URL_API}/courses`);
  }

  postStudents(student: JsonPipe) {
    return this.httpClient.post(`${this.URL_API}/student`, student);
  }

  postCourses(course: JsonPipe) {
    return this.httpClient.post(`${this.URL_API}/course`, course);
  }

  findStudentById(id: string) {
    return this.httpClient.get(`${this.URL_API}/student/${id}`);
  }

  findCourseById(id: string) {
    return this.httpClient.get(`${this.URL_API}/student/${id}`);
  }

  deleteStudentById(id: string) {
    return this.httpClient.delete(`${this.URL_API}/student/id/${id}`);
  }

  deleteCourseById(id: string) {
    return this.httpClient.delete(`${this.URL_API}/course/${id}`);
  }
}
