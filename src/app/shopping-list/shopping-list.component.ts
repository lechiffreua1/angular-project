import {Component, OnInit, OnDestroy} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  selectedId: number;
  private addIngredientSubscr: Subscription;
  private deleteIngredientSubscr: Subscription;
  private saveSelectedIngredientSuscr: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.addIngredientSubscr = this.shoppingListService.addIngredient.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

    this.deleteIngredientSubscr = this.shoppingListService.deleteIngredient.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
      delete this.selectedId;
    });

    this.saveSelectedIngredientSuscr = this.shoppingListService.saveSelectedIngredient
      .subscribe(() => {
        this.selectedId = null;
      });
  }

  ngOnDestroy() {
    this.addIngredientSubscr.unsubscribe();
    this.deleteIngredientSubscr.unsubscribe();
  }

  selectIngredient(id: number) {
    this.selectedId = id;
    this.shoppingListService.onSelectIngredient(id);
  }

}
