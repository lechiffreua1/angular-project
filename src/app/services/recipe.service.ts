import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

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

  getRecipes() {
    return this.recipes.slice();
  }
}
