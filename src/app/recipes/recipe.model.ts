import {Ingredient} from "../shared/ingredient.model";

export class Recipe {
  constructor(public readonly name: string, public readonly description: string, public readonly imagePath: string, public ingredients: Ingredient[]) {
  }
}
