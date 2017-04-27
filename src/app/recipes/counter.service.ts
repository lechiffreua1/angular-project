import { Output, EventEmitter } from '@angular/core';

export class CounterService {
  // @Output() countedItems = new EventEmitter<string>();

  countItems(array: string[]) {
    // this.countedItems.emit();
    return array.length;
  }
}
