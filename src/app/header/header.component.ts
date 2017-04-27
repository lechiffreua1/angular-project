import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  selected: string = 'recipe';
  @Output() changeView = new EventEmitter<string>();

  constructor() {

  }

  onSelect(item: string) {
    this.selected = item;
    this.changeView.emit(item);
  }

}
