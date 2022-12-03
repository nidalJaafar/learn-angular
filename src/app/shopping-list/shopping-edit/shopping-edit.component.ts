import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import ShoppingListService from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("name") name?: ElementRef<HTMLInputElement>
  @ViewChild("amount") amount?: ElementRef<HTMLInputElement>

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    if (this.name && this.amount)
      this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value, +this.amount.nativeElement.value))
  }
}
