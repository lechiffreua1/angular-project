import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() inactiveUser: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  setToActive(name: string) {
    this.usersService.setToActive(name);
  }

}
