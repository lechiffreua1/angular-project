import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  handleAddedItem(obj: {name: string, amount: number}) {
    this.ingredients.push(new Ingredient(obj.name, obj.amount));
  }

  selectIngredient(item: Ingredient) {
    this.selectedIngredient = item;
  }

  onDeleteSelectedItem(item: Ingredient) {
    let index = this.ingredients.indexOf(item);
    this.ingredients.splice(index, 1);
    this.selectedIngredient = null;
  }

}
