import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private eventService: EventService
  ) {
    this.form = new FormBuilder().group({
      name: [null, Validators.required],
      teacherName: [null, Validators.required],
      classNumber: [null, Validators.required],
      startDate: [null, Validators.required],
    });
  }

  get name(): AbstractControl {
    return this.form.get('name')!;
  }

  get teacherName(): AbstractControl {
    return this.form.get('teacherName')!;
  }

  get classNumber(): AbstractControl {
    return this.form.get('classNumber')!;
  }

  get startDate(): AbstractControl {
    return this.form.get('startDate')!;
  }

  onSubmit() {
    this.eventService.emitEvent(this.form);
  }
}
