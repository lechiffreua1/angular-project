import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import {UsersService} from "./users.service";
import { CounterService } from './counter.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [UsersService, CounterService]
})
export class RecipesComponent implements OnInit {
  selected: Recipe;
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  countActive: number;
  countInactive: number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.countActive = this.usersService.countActive;
    this.countInactive = this.usersService.countInactive;

    console.log(this.countActive, this.countInactive);
  }

  showDetailRecipe(recipe: Recipe) {
    this.selected = recipe;
  }

}
