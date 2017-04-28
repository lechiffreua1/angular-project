import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  submitForm(name: string, amount: number) {
    this.shoppingListService.addNewIngredient(new Ingredient(name, +amount));
  }

  deleteShoppingItem() {
    this.shoppingListService.deleteSelectedIngredient();
  }

}
