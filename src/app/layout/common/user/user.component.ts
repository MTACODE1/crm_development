import { BooleanInput } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/core/user/user.types';
import { Subject } from 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'user'
})

export class UserComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_showAvatar: BooleanInput;

  @Input() showAvatar: boolean = true;
  user: User;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _router: Router) { }


  ngOnInit(): void {
    // Subscribe to user changes
    const loginUser = localStorage.getItem('loginUser');
    this.user = JSON.parse(loginUser)
    // this._userService.user$
    //     .pipe(takeUntil(this._unsubscribeAll))
    //     .subscribe((user: User) => {
    //         this.user = user;

    //         // Mark for check
    //         this._changeDetectorRef.markForCheck();
    //     });
  }


  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  updateUserStatus(status: string): void {
    // Return if user is not available
    // if ( !this.user )
    // {
    //     return;
    // }

    // // Update the user
    // this._userService.update({
    //     ...this.user,
    //     status
    // }).subscribe();
  }

  signOut(): void {
    this._router.navigate(['/sign-out']);
  }
}
