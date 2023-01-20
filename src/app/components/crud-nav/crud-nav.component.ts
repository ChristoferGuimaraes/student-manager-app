import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-crud-nav',
  templateUrl: './crud-nav.component.html',
  styleUrls: ['./crud-nav.component.scss'],
})
export class CrudNavComponent {
  @Input() title?: string;
  @Input() entityId?: any;

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService, private postService: PostService) { }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        title: `${this.title}`,
        body: "Aqui vai o formulário.."
      },
    })
  }

  delete() {
    if (this.title === "Students") {
      this.postService.deleteStudentById(this.entityId).subscribe();
      return;
    }
    this.postService.deleteCourseById(this.entityId).subscribe();
  }

}
