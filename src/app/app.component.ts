import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase'

import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingListService]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC0Sh0huUOyFjOslPK68rFce866rg3nqek",
      authDomain: "recipe-book-186d7.firebaseapp.com"
    });
  }

}
