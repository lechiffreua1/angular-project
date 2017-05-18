import { NgModule } from "@angular/core";
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {EmptyRecipeDetailComponent} from "./empty-recipe-detail/empty-recipe-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesRouting} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    EmptyRecipeDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRouting,
    SharedModule
  ]
})
export class RecipesModule {

}
