import {Component} from '@angular/core';
import {Server} from "./common/server-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Server[] = [];

  onElementAdded(element: Server) {
    this.serverElements.push(element)
  }
}
