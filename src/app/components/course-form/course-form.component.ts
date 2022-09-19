import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  validationForm: FormGroup;

  constructor() {
    this.validationForm = new FormGroup({
      courseName: new FormControl(null, Validators.required),
      teacherName: new FormControl(null, Validators.required),
      classNumber: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required)
    });
  }

  get courseName(): AbstractControl {
    return this.validationForm.get('courseName')!;
  }

  get teacherName(): AbstractControl {
    return this.validationForm.get('teacherName')!;
  }

  get classNumber(): AbstractControl {
    return this.validationForm.get('classNumber')!;
  }

  get startDate(): AbstractControl {
    return this.validationForm.get('startDate')!;
  }

}
