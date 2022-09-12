import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  student: boolean = true;
  course: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selectTableStudent(){
    if (this.student == false){
      this.student = !this.student;
      this.course = !this.course;
    }
  }

  selectTableCourse(){
    if (this.course == false){
      this.student = !this.student;
      this.course = !this.course;
    }
  }

}
