import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DataService } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

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
  _unsub$ = new Subject();

  constructor(
    private modalService: MdbModalService,
    private dataService: DataService,
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
      this.dataService
        .deleteStudentById(this.entityId!)
        .pipe(takeUntil(this._unsub$))
        .subscribe(() => {
          this.refreshTable.emit();
        });

      return;
    }

    this.dataService
      .deleteCourseById(this.entityId!)
      .pipe(takeUntil(this._unsub$))
      .subscribe(() => {
        this.refreshTable.emit();
      });
  }

  create(): void {
    if (this.title === 'Students') {
      this.eventService.getEvent().subscribe((form: FormGroup) => {
        this.dataService
          .postStudents(form.value)
          .pipe(takeUntil(this._unsub$))
          .subscribe({
            next: () => {
              this.modalRef?.close();
              this.refreshTable.emit();
            },
            error: (err) => console.log(err),
          });
      });
      return;
    }

    this.eventService.getEvent().subscribe((form: FormGroup) => {
      this.dataService
        .postCourses(form.value)
        .pipe(takeUntil(this._unsub$))
        .subscribe({
          next: () => {
            this.modalRef?.close();
            this.refreshTable.emit();
          },
          error: (err) => console.log(err),
        });
    });
  }
}
