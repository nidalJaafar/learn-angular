import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import User from "../common/model/user";
import UserService from "../common/service/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {}

  onSetToInactive(id: number) {
    this.userService.addInActiveUser(id)
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers
  }
}
