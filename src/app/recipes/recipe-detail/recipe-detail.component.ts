import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService) {

    this.route.params
      .subscribe((params: Params) => {
        let id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipes()[id];
      });
  }

  ngOnInit() {
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.toShoppingList(ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
