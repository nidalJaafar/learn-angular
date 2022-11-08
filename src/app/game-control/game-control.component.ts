import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() value = new EventEmitter<number>()
  counter = 0
  interval?: ReturnType<typeof setInterval>

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => this.value.emit(this.counter++), 1000)
  }
  onStop() {
    clearInterval(this.interval)
  }

}
