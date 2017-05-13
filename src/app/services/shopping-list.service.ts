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
  selectIngredient = new Subject<number>();
  saveSelectedIngredient = new Subject<void>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addIngredient.next(ingredient);
  }

  deleteSelectedIngredient() {
    this.deleteIngredient.next();
  }

  saveSelectedIngredientChanges(ingredient: Ingredient, id: number) {
    this.ingredients[id].name = ingredient.name;
    this.ingredients[id].amount = ingredient.amount;

    this.saveSelectedIngredient.next();
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  onSelectIngredient(id) {
    this.selectIngredient.next(id);
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.ingredients = this.ingredients.concat(ingredients);
  }
}
