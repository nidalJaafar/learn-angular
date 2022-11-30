import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class CounterService {
  private activeToInActive = 0
  private inActiveToActive = 0

  addActive() {
    this.inActiveToActive++
    this.log()
  }

  addInActive() {
    this.activeToInActive++
    this.log()
  }

  private log() {
    console.log("active to inactive: " + this.activeToInActive)
    console.log("inactive to active: " + this.inActiveToActive)
  }
}
