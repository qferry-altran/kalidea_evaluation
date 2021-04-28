import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';
import { IfUserDirectiveDirective } from './if-user-directive.directive';

@Directive({
  selector: '[appIfNotUserDirective]'
})
export class IfNotUserDirectiveDirective extends IfUserDirectiveDirective{

  constructor(
    protected render: Renderer2, 
    protected el: ElementRef,
    protected userService: UserService
    ) { 
    super(render, el, userService);
  }

  protected update(user: User | null): void {
    if (user) {
      this.addHiddenClass();
    } else {
      this.removeHiddenClass();
    }
  }

}
