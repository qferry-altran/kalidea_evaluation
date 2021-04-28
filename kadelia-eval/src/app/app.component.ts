import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  public get userName(): string {
    if(!this.userService.user) {
      return;
    }

    return this.userService.user.username;
  }

  constructor(private userService: UserService) {}


}
