import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipeDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeDetail = this.recipeService.getRecipeById(this.id);
        }
      );
  }

  getRecipeDetails(recipeDetails: Recipe){
    this.recipeDetail = recipeDetails;
    console.log(recipeDetails.name);
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this below code is to go up one level and prepare the url like /recipes/id/edit but the above code works fine
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
