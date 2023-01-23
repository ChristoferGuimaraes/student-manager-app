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
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent {
  form: FormGroup;

  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private eventService: EventService
  ) {
    this.form = new FormBuilder().group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      birthDate: [null, Validators.required],
      courses: [[]],
    });
  }

  get firstName(): AbstractControl {
    return this.form.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.form.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.form.get('email')!;
  }

  get birthDate(): AbstractControl {
    return this.form.get('birthDate')!;
  }

  get courses(): AbstractControl {
    return this.form.get('courses')!;
  }

  onSubmit(): void {
    this.eventService.emitEvent(this.form);
  }
}
