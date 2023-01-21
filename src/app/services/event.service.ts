import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private submitEvent = new EventEmitter<void>();

  emitEvent(event: any) {
    this.submitEvent.emit(event);
  }

  getEvent() {
    return this.submitEvent;
  }
}
