import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() activeUser: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  setToInactive(name: string) {
    this.usersService.setToInactive(name);
  }

}
