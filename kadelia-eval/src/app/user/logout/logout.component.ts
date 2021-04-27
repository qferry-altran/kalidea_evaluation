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

  public loading: boolean = false;

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

    this.loading = true;

    // Call the UserService to disconnect
    this.subscription = this.userService.logout().subscribe(() => {
      this.router.navigate(['/home']);
      this.loading = false;
    },
    () => this.loading = false);
  }

}
