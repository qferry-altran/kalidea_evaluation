import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credentials } from '../models/credentials';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  public credential = new FormGroup({
    mail: new FormControl('',[
        Validators.minLength(6),
        Validators.required
      ]),
    pwd: new FormControl('', [
        Validators.minLength(5),
        Validators.required
      ])
  });

  public error = '';

  public subscription: Subscription;

  /**
   * Get the validity of the fields filled by user
   */
  public get isValid(): boolean {
    return this.credential.valid;
  }

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
   * Login the user
   */
  public onSubmit(){
    // Informations from the fields
    const informations: Credentials = {
      password: this.credential.get('pwd').value,
      email: this.credential.get('mail').value
    };

    // Destroy previous subscribtion
    if(this.subscription) {
      this.subscription.unsubscribe();
    }

    // Call the UserService to authenticate
    this.subscription = this.userService.login(informations).subscribe((user)=> {
      this.error = '';
      this.router.navigate(['/home']);
    },
    (error) => {
      this.error = error;
    });

  }
}
