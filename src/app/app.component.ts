import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isEven = true
  value = 0

  onValueChange(value: number) {
    this.value = value
    this.isEven = value % 2 == 0
  }
}
