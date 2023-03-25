import { Component, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('A','A-desc','https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg?quality=90&webp=true&resize=600,545'),
    new Recipe('B','B-desc','https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Chicken-Tikka-99647a6.jpg?quality=90&webp=true&resize=600,545')
  ];
  constructor(){}

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)

  }

  ngOnInit(){

  }

}
