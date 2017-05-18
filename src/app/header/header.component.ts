import { Component} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private recipeService: RecipeService,
              private authService: AuthService,
              private router: Router) {

  }

  onSaveData() {
    this.recipeService.saveRecipes();
  }

  onFetchData() {
    this.recipeService.getRecipesFromFireBase();
  }

  onSignOut() {
    this.authService.signOut();
  }

}
