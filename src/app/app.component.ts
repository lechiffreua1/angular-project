import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes: boolean = true;

  onChangeView(recipe: string) {
    this.showRecipes = recipe === 'recipe' ? true: false;
  }

}
