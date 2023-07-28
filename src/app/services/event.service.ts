import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private submitEvent = new EventEmitter<unknown>();

  emitEvent(event: unknown) {
    this.submitEvent.emit(event);
  }

  getEvent() {
    return this.submitEvent;
  }
}
