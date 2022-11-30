import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addItem = new EventEmitter<Ingredient>()
  @ViewChild("name") name?: ElementRef<HTMLInputElement>
  @ViewChild("amount") amount?: ElementRef<HTMLInputElement>

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    if (this.name && this.amount)
      this.addItem.emit(new Ingredient(this.name.nativeElement.value, +this.amount.nativeElement.value))
  }
}
