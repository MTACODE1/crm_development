import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableModel, User } from 'app/core/user/user.types';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
  private readonly usersSatus$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) { }

  public user(value: User) {
    // Store the value
    this._user.next(value);
  }

  public user$(): Observable<User> {
    return this._user.asObservable();
  }


  /** Get the current logged in user data */
  // get(): Observable<User[]> {
  //   return this._httpClient.get<User[]>('api/common/user').pipe(
  //     tap((user) => {
  //      const email = localStorage.getItem('loginUser')
  //       const loginUser = user.find(x => x.email == email);
  //       this._user.next(loginUser);
  //     })
  //   );
  // }

  // /** Update the user * @param user */
  // update(user: User): Observable<any> {
  //   return this._httpClient.patch<User>('api/common/user', { user }).pipe(
  //     map((response) => {
  //       this._user.next(response);
  //     })
  //   );
  // }

  getUserTable(params) {
    // return this._httpClient.get<TableModel[]>(`assets/mock-data/table.json`)
    return this._httpClient.post<TableModel[]>(`${environment.baseUrl}/client`, params)
  }

  getColumns() {
    return ['companyName', 'logo', 'accountant', 'companyType', 'onboarding', 'saledate', 'package', 'quarters', 'frequency', 'bookkeeper', 'completionweek',
      'bookKeepingStatus', 'vatRegistered', 'vatQuarter', 'vatscheme', 'vatStatus', 'eoy', 'oneoff', 'endDate', 'duedate',
      'accountsStatus1', 'accountsStatus2', 'number', 'self1', 'self2'];
  }

  updateTaskStatus(taskParam) {
    return this._httpClient.post(`${environment.baseUrl}/process_status`, taskParam)
  }

  cancelStatus(status) {
    return this._httpClient.post(`${environment.baseUrl}/cancel_client_status`, status)
  }

  public setUsersStatus(data): void {
    this.usersSatus$.next(data);
  }

  public getUsersStatus(): Observable<any> {
    return this.usersSatus$.asObservable();
  }

}