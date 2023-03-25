import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeItem!: Recipe;
  @Output() recipeDetail = new EventEmitter<void>();

  onRecipeClick(){
    this.recipeDetail.emit();

  }


constructor(){}

}
