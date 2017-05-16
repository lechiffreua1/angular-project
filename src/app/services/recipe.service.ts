import {Http, Response} from "@angular/http";

import {Subject} from "rxjs";

import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply the test',
              'https://upload.wikimedia.org/wikipedia/commons/1/14/Eggless-jaggery-shortbread-recipe.jpg',
              [new Ingredient('Bread', 2), new Ingredient('Tomato', 3)]
              ),
    new Recipe('Another Test Recipe',
                'This is another recipe',
                'http://maxpixel.freegreatpicture.com/static/photo/1x/Cooking-Baking-Dish-Salad-Healthy-Eating-Recipe-832811.jpg',
              [new Ingredient('Milk', 2), new Ingredient('Carrot', 3)]
              )
  ];

  constructor(private http: Http) {}

  updateRecipeListSubject = new Subject<Recipe[]>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice().splice(id, 1)[0];
  }

  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.updateRecipeListSubject.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateRecipeListSubject.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.updateRecipeListSubject.next(this.recipes.slice());
  }

  saveRecipes() {
    this.http.put('https://recipe-book-186d7.firebaseio.com/recipes.json', this.recipes)
      .subscribe(
        (response: Response) => {
          console.log(response.json());
        }
      );
  }

  getRecipesFromFireBase() {
    return this.http.get('https://recipe-book-186d7.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          this.updateRecipeListSubject.next(this.recipes.slice());
        }
      );
  }
}
