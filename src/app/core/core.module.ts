import {NgModule} from "@angular/core";

import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth/auth.service";
import {ShoppingListService} from "../services/shopping-list.service";
import {RecipeService} from "../services/recipe.service";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    AuthService
  ]
})
export class CoreModule {}
