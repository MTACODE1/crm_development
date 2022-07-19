import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  constructor(private _httpClient: HttpClient, private _userService: UserService) { }
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  signIn(credentials: { username: string; password: string }): Observable<any> {
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }


    return this._httpClient.post(`${environment.baseUrl}/user`, credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.token;
        let user = {
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.email,
          avatar: response.picture,
          username: response.username,
          user_id: response.user_id
        }
        localStorage.setItem('loginUser', JSON.stringify(user));
        this._authenticated = true;
        // Store the user on the user service
        this._userService.user(user);
        return of(response);
      })
    );
  }

  signInUsingToken(): Observable<any> {
    return this._httpClient.post('api/auth/sign-in-with-token', {
      accessToken: this.accessToken
    }).pipe(
      catchError(() =>
        of(false)
      ),
      switchMap((response: any) => {
        if (response.accessToken) {
          this.accessToken = response.accessToken;
        }

        this._authenticated = true;

        this._userService.user = response.user;
        return of(true);
      })
    );
  }


  signOut(): Observable<any> {
    localStorage.clear();
    this._authenticated = false;
    return of(true);
  }

  check(): Observable<boolean> {
    if (this._authenticated) {
      return of(true);
    }
    if (!this.accessToken) {
      return of(false);
    }

    return of(true);
  }

  getToken() {
    return !!localStorage.getItem('accessToken');
  }
}
