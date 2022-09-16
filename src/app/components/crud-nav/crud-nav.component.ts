import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-crud-nav',
  templateUrl: './crud-nav.component.html',
  styleUrls: ['./crud-nav.component.scss'],
})
export class CrudNavComponent{
  @Input() title?: string;

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }

}
