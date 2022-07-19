import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlTree } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this._check();
  }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this._check();
  }


  private _check(): Observable<boolean> {
    return this._authService.check()
      .pipe(
        switchMap((authenticated) => {
          if (authenticated) {
            this._router.navigate(['']);
            return of(false);
          }
          return of(true);
        })
      );
  }
}
