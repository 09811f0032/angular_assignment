import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
//subject will almost work like an EventEmitter    
ingredientsChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
   private ingredients: Ingredient[] = [new Ingredient('Apples',10),new Ingredient('Oranges',5)];

   getIngredients(){
    return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   getIngredientById(index: number){
    return this.ingredients[index];
   }

   addIngredients(ingredients: Ingredient[]){
    ///... is a spread operator which will add all of the elements in the array once
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number){
     this.ingredients.splice(index,1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}