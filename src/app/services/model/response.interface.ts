import { ICourse } from '../../components/model/course.interface';
import { IStudent } from '../../components/model/student.interface';

export interface StudentResponse {
  content: IStudent[];
}

export interface CourseResponse {
  content: ICourse[];
}
