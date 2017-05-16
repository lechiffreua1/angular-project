import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { EmptyRecipeDetailComponent } from './recipes/empty-recipe-detail/empty-recipe-detail.component';
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: EmptyRecipeDetailComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
