export interface IStudentTable {
  id: number;
  fullName: string;
  email: string;
  age: number
  courses?: string[];
}