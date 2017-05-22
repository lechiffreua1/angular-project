import {Component, OnInit, Input} from '@angular/core';

import { Recipe } from '../../recipe.model';
import {trigger, style, keyframes, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [
    trigger('recipeState', [
      transition('void => *', animate(800, keyframes([
        style({
          opacity: 0
        }),
        style({
          opacity: 0.4
        }),
        style({
          opacity: 0.8
        }),
        style({
          opacity: 1
        })
      ]))),
      transition('* => void', animate(800, keyframes([
        style({
          opacity: 1
        }),
        style({
          opacity: 0.8
        }),
        style({
          opacity: 0.4
        }),
        style({
          opacity: 0
        })
      ])))
    ])
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
