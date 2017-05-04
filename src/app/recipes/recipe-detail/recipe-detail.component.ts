import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.toShoppingList(ingredients);
  }

}
