import { Ingredient } from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";
import {Subject} from "rxjs";

export class ShoppingListService {

  //ingredientAdded = new EventEmitter<Ingredient>(); Approach 1

  // ingredientsChanged = new EventEmitter<Ingredient[]>(); // Approach 2

  ingredientsChanged = new Subject<Ingredient[]>(); // Approach 3( better one )
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
    // return this.ingredients Approach 1;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingredientsChanged.emit(this.ingredients.slice()); // Approach 2
    this.ingredientsChanged.next(this.ingredients.slice()); // Approach 3
  }

  addIngredients(ingredients: Ingredient[]) {
    //this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    //this.ingredientsChanged.emit(this.ingredients.slice()); // Approach 2
    this.ingredientsChanged.next(this.ingredients.slice()); // Approach 3
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
