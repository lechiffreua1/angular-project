import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply the test', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Eggless-jaggery-shortbread-recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is another recipe', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Baking-Dish-Salad-Healthy-Eating-Recipe-832811.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipeItem(recipeItem: Recipe) {
    this.selectedRecipe.emit(recipeItem);
  }

}
