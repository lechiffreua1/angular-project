import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from "../../services/shopping-list.service";
import {FormGroup, NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingItemForm') shoppingItemForm: NgForm;
  selectIngredientSubscr: Subscription;
  editMode = false;
  editedIndexNumber: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.selectIngredientSubscr = this.shoppingListService.selectIngredient
      .subscribe((id: number) => {
        this.editMode = true;
        this.editedIndexNumber = id;
        this.editedIngredient = this.shoppingListService.getIngredient(id);
        this.shoppingItemForm.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      });
  }

  ngOnDestroy() {
    this.selectIngredientSubscr.unsubscribe();
  }

  deleteShoppingItem() {
    this.shoppingListService.deleteSelectedIngredient(this.editedIndexNumber);
    this.clearForm();
  }

  saveIngredientChanges() {
    const ingredient = {
      amount: this.shoppingItemForm.value.amount,
      name: this.shoppingItemForm.value.name
    };

    this.shoppingListService.saveSelectedIngredientChanges(ingredient, this.editedIndexNumber);

    this.clearForm();
  }

  clearForm() {
    this.shoppingItemForm.reset();
    this.editMode = false;
  }

  onSubmit(form: NgForm) {
    const amount = form.value.amount;
    const name = form.value.name;
    this.shoppingListService.addNewIngredient(new Ingredient(name, amount));
    this.clearForm();
  }
}
