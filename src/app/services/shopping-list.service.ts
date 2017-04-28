import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient = new EventEmitter<Ingredient>();
  deleteIngredient = new EventEmitter<void>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.addIngredient.emit(ingredient);
  }

  deleteSelectedIngredient() {
    this.deleteIngredient.emit();
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
  }
}
