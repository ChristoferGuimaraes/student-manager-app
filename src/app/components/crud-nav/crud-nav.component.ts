import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PostService } from 'src/app/services/post.service';
import { EventService } from 'src/app/services/event.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-nav',
  templateUrl: './crud-nav.component.html',
  styleUrls: ['./crud-nav.component.scss'],
})
export class CrudNavComponent implements OnInit {
  @Input() title?: string;
  @Input() entityId?: string;
  @Output() refreshTable = new EventEmitter<void>();

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private service: PostService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.create();
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: {
        title: `${this.title}`,
      },
    });
  }

  delete(): void {
    if (this.title === 'Students') {
      this.service.deleteStudentById(this.entityId).subscribe(() => {
        this.refreshTable.emit();
      });

      return;
    }
    this.service.deleteCourseById(this.entityId).subscribe();
  }

  create(): void {
    this.eventService.getEvent().subscribe((form: FormGroup) => {
      this.service.postStudents(form.value).subscribe(
        () => {
          this.modalRef?.close();
          this.refreshTable.emit();
        },
        (err) => console.log(err)
      );
    });
  }
}
