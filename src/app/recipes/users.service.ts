import { Injectable } from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers: string[] = [
    'Max',
    'Pete'
  ];
  inactiveUsers: string[] = [
    'Mike',
    'John'
  ];

  countActive: number = this.activeUsers.length;
  countInactive: number = this.inactiveUsers.length;

  constructor(private counterService: CounterService) {}

  setToActive(name: string) {
    let index = this.inactiveUsers.indexOf(name);
    let element = this.inactiveUsers.splice(index, 1);
    this.activeUsers.push(element[0]);
    this.countActive = this.counterService.countItems(this.activeUsers);
  }

  setToInactive(name: string) {
    let index = this.activeUsers.indexOf(name);
    let element = this.activeUsers.splice(index, 1);
    this.inactiveUsers.push(element[0]);
    this.countInactive = this.counterService.countItems(this.inactiveUsers);
  }
}
