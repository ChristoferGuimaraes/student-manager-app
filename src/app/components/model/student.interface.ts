export interface IStudent {
  id: number;
  fullName: string;
  email: string;
  age: number
  courses?: string[];
  selected: boolean;
}