import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";

@Injectable()
export default class RecipeService {
  private recipesArray: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('test recipe', 'test description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
  ]
  private recipeSelected = new EventEmitter<Recipe>()

  get recipes() {
    return this.recipesArray.slice()
  }

  get recipeSelectedEvent() {
    return this.recipeSelected
  }
}
