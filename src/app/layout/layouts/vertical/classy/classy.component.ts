import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { User } from 'app/core/user/user.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector     : 'classy-layout',
    templateUrl  : './classy.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
  isScreenSmall: boolean;
  navigation: Navigation;
  user: User;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor( private _navigationService: NavigationService,private _fuseMediaWatcherService: FuseMediaWatcherService,
      private _fuseNavigationService: FuseNavigationService)
  { }


    /**
     * Getter for current year
     */
  get currentYear(): number  {
    return new Date().getFullYear();
  }

  ngOnInit(): void {
      // Subscribe to navigation data
    this._navigationService.navigation$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((navigation: Navigation) => {
        this.navigation = navigation;
    });

    // Subscribe to the user service
    this.user = JSON.parse(sessionStorage.getItem('loginUser'));
    // this._userService.user$()
    //     .pipe((takeUntil(this._unsubscribeAll)))
    //     .subscribe((user: User) => {
    //         this.user = user;
    //         console.log('classy component user', this.user)
    //     });

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({matchingAliases}) => {
          // Check if the screen is small
        this.isScreenSmall = !matchingAliases.includes('md');
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void   {
      // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
  toggleNavigation(name: string): void {
      // Get the navigation
    const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

    if ( navigation ) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
}
