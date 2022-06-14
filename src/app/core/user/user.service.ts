import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableModel, User } from 'app/core/user/user.types';
import * as moment from 'moment';
import { BehaviorSubject, map, Observable, ReplaySubject, tap } from 'rxjs';

export interface ICalendarState {
  selectedDate?: moment.Moment;
}

const initialState: ICalendarState = {
  selectedDate: moment()
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: ReplaySubject<User> = new ReplaySubject<User>(1);
  private readonly usersSatus$: BehaviorSubject<any> = new BehaviorSubject(null);
  private readonly config$: BehaviorSubject<ICalendarState> = new BehaviorSubject(initialState);

  constructor(private _httpClient: HttpClient) { }
  /** Setter & getter for user
   * @param value
   */

  set user(value: User) {
    // Store the value
    this._user.next(value);
  }

  get user$(): Observable<User> {
    return this._user.asObservable();
  }

  /** Get the current logged in user data */
  get(): Observable<User[]> {
    return this._httpClient.get<User[]>('api/common/user').pipe(
      tap((user) => {
       const email = localStorage.getItem('loginUser')
        const loginUser = user.find(x => x.email == email);
        this._user.next(loginUser);
      })
    );
  }

  /** Update the user * @param user */
  update(user: User): Observable<any> {
    return this._httpClient.patch<User>('api/common/user', { user }).pipe(
      map((response) => {
        this._user.next(response);
      })
    );
  }

  getUserTable() {
    return this._httpClient.get<TableModel[]>(`assets/mock-data/table.json`)
  }

  getColumns() {
    return ['companyName', 'customerName', 'package', 'accountant', 'bookkeeper', 'accountsTeam', 'companyType', 'lastDispo', 'lastEmail',
      'lastSms', 'onboarding', 'openOne', 'openOff', 'frequency', 'bookkeepingWeek', 'bookKeepingStatus', 'nextbookKeepingStatus', 'unreconciled', 'last', 'accountsWith', 'vatRegistered', 'vatStatus',
      'nextVatStatus', 'vatQuarter', 'lastVat', 'vat', 'payroll', 'management', 'lastManagement', 'lastType', 'accountsStatus1', 'accountsStatus2', 'chNextAccountsDate',
      'chConfirmatation', 'number', 'self1', 'self2', 'avgLast', 'avgLast1', 'clientBilling']
  }

  public setUsersStatus(data): void {
    this.usersSatus$.next(data);
  }

  public getUsersStatus(): Observable<any> {
    return this.usersSatus$.asObservable();
  }


  public getConfig(): Observable<ICalendarState> {
    return this.config$.asObservable();
  }

  public setConfig(config: ICalendarState): void {
    this.config$.next({ ...this.config$.getValue(), ...config });
  }
}
