import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export default class RecipeService {
  private recipesArray: Recipe[] = [
    new Recipe(
      'test recipe',
      'test description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient("bread", 1),
        new Ingredient("meat", 2)
      ]
    ),
    new Recipe(
      'test recipe',
      'test description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient("bun", 2)
      ])
  ]
  private recipeSelected = new EventEmitter<Recipe>()

  get recipes() {
    return this.recipesArray.slice()
  }

  get recipeSelectedEvent() {
    return this.recipeSelected
  }
}
