import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../../services/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipeItem = recipe;
    });
  }

  ngOnInit() {
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.toShoppingList(ingredients);
  }

}
