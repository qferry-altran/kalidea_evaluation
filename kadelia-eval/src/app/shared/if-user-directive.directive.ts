import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user/models/user';
import { UserService } from '../user/user.service';

@Directive({
  selector: '[appIfUserDirective]'
})
export class IfUserDirectiveDirective implements OnDestroy {

  private subscribtion: Subscription;

  constructor(
    protected render: Renderer2, 
    protected el: ElementRef,
    protected userService: UserService
    ) { 
    this.subscribtion = this.userService.user$.subscribe((user) => this.update(user));
  }

  public ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  protected update(user: User | null): void {
    if (user) {
      this.removeHiddenClass();
    } else {
      this.addHiddenClass();
    }
  }

  protected addHiddenClass(): void {
    this.render.addClass(this.el.nativeElement, 'd-none');
  }

  protected removeHiddenClass(): void {
    this.render.removeClass(this.el.nativeElement, 'd-none');
  }
}
