import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Server} from "../common/server-interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() elementCreated = new EventEmitter<Server>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddElement(name: HTMLInputElement, content: HTMLInputElement, type: string) {
    this.elementCreated.emit({
      type: type,
      name: name.value,
      content: content.value
    })
  }
}

