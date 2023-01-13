import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

//to inject one service in to another
@Injectable()
export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe('Hot Wings', 'A super-tasty Wings - ', 'https://kfc.fi/wp-content/uploads/2021/10/Hot_wings_3.png', [new Ingredient('Meat',1), new Ingredient('Crisps',10)]),
        new Recipe('Chicken Burger', 'Tasty and Cheesy', 'https://kfc.fi/wp-content/uploads/2021/10/Chickenburger.png',[new Ingredient('Bread',2), new Ingredient('Cheese',2)])
      ];

    getRecipes(){
        //we only get a copy of the recipies array
        return this.recipes.slice();
    }
    
    constructor(private shoppingListService: ShoppingListService){

    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeById(index: number){
        return this.recipes[index];
    }
}