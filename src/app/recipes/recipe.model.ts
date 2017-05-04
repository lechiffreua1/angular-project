import {Ingredient} from "../shared/ingredient.model";
export class Recipe {
  public name: string;
  public desc: string;
  public image: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, image: string, ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.ingredients = ingredients;
  }
}
