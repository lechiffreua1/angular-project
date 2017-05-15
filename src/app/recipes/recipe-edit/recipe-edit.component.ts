import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../../services/recipe.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {

        if (params['id']) {
          this.id = +params['id'];
          this.editMode = true;
        } else {
          this.editMode = false;
        }

        this.initForm();
      });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.recipe = this.recipeService.getRecipe(this.id);
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.image;
      recipeDescription = this.recipe.desc;

      if (this.recipe.ingredients.length) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    const image = this.recipeForm.value['imagePath'];
    const name = this.recipeForm.value['name'];
    const description = this.recipeForm.value['description'];
    const ingredients = this.recipeForm.value['ingredients'];

    const recipe = new Recipe(name, description, image, ingredients);

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addNewRecipe(recipe);
    }

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  addAnotherIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  deleteIngredientFromRecipe(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onClickCancel() {
    this.recipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
