import { Component} from '@angular/core';
import {RecipeService} from "../services/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private recipeService: RecipeService) {

  }

  onSaveData() {
    this.recipeService.saveRecipes();
  }

  onFetchData() {
    this.recipeService.getRecipesFromFireBase();
  }

}
