import {Injectable} from "@angular/core";
import User from "../model/user";
import CounterService from "./counter.service";

@Injectable()
export default class UserService {
  private active: User[] = [{'name': 'nidal4'}, {'name': 'nidal2'}]
  private inActive: User[] = [{'name': 'nidal1'}, {'name': 'nidal3'}]

  constructor(private counterService: CounterService) {
  }

  addActiveUser(id: number) {
    this.activeUsers.push(this.inActiveUsers[id])
    this.inActiveUsers.splice(id, 1)
    this.counterService.addActive()
  }

  addInActiveUser(id: number) {
    this.inActiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1)
    this.counterService.addInActive()
  }

  get activeUsers() {
    return this.active
  }
  get inActiveUsers() {
    return this.inActive
  }
}
