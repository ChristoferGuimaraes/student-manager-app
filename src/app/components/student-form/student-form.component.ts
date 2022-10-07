import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  validationForm: FormGroup;

  constructor(public modalRef: MdbModalRef<ModalComponent>, private service: PostService) {
    this.validationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required)
    });
  }

  get firstName(): AbstractControl {
    return this.validationForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.validationForm.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.validationForm.get('email')!;
  }

  get birthDate(): AbstractControl {
    return this.validationForm.get('birthDate')!;
  }
{

}
  onSubmit(){
    this.service.postStudents().subscribe(
    success => console.log("sucesso"),
    error => console.log(error),
    () => console.log('request completo')
    );
  }
}
