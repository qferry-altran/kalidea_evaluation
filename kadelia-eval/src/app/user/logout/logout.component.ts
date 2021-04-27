import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnDestroy {

  public subscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  /**
   * Destroy subscription to avoid memory leak
   */
  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Logout the user
   */
  public onLogoutClick() {
    // Destroy previous subscribtion
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    // Call the UserService to disconnect
    this.subscription = this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
