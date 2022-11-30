import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from "../common/model/user";
import UserService from "../common/service/user.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {}

  onSetToActive(id: number) {
    this.userService.addActiveUser(id)
  }

  ngOnInit(): void {
    this.users = this.userService.inActiveUsers
  }
}
