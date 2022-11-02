import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular'
  logs: number[] = []
  hidden = true

  toggle() {
    this.hidden = !this.hidden
    this.logs.push(new Date().getTime())
    return
  }
}
