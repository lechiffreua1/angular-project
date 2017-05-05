import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient = new Subject<Ingredient>();
  deleteIngredient = new Subject<void>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.addIngredient.next(ingredient);
  }

  deleteSelectedIngredient() {
    this.deleteIngredient.next();
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
  }
}
