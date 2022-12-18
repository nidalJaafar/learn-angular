import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import ShoppingListService from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = new Recipe('', '', '', [])

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredients() {
    this.shoppingService.addIngredients(this.recipe.ingredients)
  }
}
