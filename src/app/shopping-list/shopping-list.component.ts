import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  selectedId: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.addIngredient.subscribe((ingredient: Ingredient) => {
      this.ingredients.push(ingredient);
    });

    this.shoppingListService.deleteIngredient.subscribe(() => {
      this.ingredients.splice(this.selectedId, 1);
      delete this.selectedId;
    })
  }

  selectIngredient(id: number) {
    this.selectedId = id;
  }

}
