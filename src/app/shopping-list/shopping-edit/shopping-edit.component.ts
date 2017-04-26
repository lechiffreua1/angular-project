import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addItem = new EventEmitter<Ingredient>();
  @Output() deleteSelectedItem = new EventEmitter<Ingredient>();
  @Input() selectedShoppingItem: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, amount: number) {
    this.addItem.emit({
      name: name,
      amount: amount
    });
  }

  deleteShoppingItem() {
    this.selectedShoppingItem = null;
    this.deleteSelectedItem.emit(this.selectedShoppingItem);
  }

}
