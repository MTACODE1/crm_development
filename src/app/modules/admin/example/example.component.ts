import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { ICalendarState, UserService } from 'app/core/user/user.service';
import * as moment from "moment";
import { Subject, takeUntil } from 'rxjs';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { TableModel } from './../../../core/user/user.types';
import { BookkeepingStatusComponent } from './bookkeeping-status/bookkeeping-status.component';
import { OnbordingFormComponent } from './onbording-form/onbording-form.component';
import { StatusNotifications } from './statuses.model';

@Component({
  selector : 'example',
  templateUrl : './example.component.html',
  styleUrls: ['./example.component.scss'],
})

export class ExampleComponent implements OnInit, OnDestroy {
  max = 0;
  vatMax = 0;
  accountMax = 0;
  accountNewMax = 0;
  displayedColumns: string[] = [];

  public userTableList: TableModel[];
  featureStatus: boolean;
  today = moment(new Date());
  searchTerm: null;
  date = new FormControl(moment());
  public pageState: ICalendarState;
  allVisited:boolean;
  showStatusBtn: boolean = false;
  showVatStatusBtn: boolean = false;
  setskippedStatus: boolean;
  statusSettings: StatusNotifications;

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService,
    public readonly dialog: MatDialog, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns();
    this.statusSettings = new StatusNotifications();
    this.getTableDetails();
    this.getUsersStatusInfo();
    this.getPageState();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private getTableDetails() {
    this.userService.getUserTable().pipe(takeUntil(this.destroyer$))
    .subscribe(res => {
      this.userTableList = res['data'];
    });
  }

   getWeekNumOfMonthOfDate(d) {
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
  }

  public getNextStatus(data, i,statsuName): void {
    statsuName[i].visited = true;
    this.allVisited = statsuName.every(item => item.visited);
    if (data === 'book' && statsuName[i].id === 8 ) {
      this.openStatusJumpDialogue('setFirst');
    } else if(data === 'book' && this.setskippedStatus && (statsuName[i].id === 9 ||statsuName[i].id === 10 || statsuName[i].id === 11)) {
      this.max = 11;
      this.triggerStatusSnackBar(statsuName[11], data);
    }  else {
      data === 'book'?this.max = i + 1:data === 'vat'? this.vatMax = i + 1:data === 'acc'?this.accountMax = i+1:this.accountNewMax = i + 1;
      this.triggerStatusSnackBar(statsuName[i + 1], data);
    }
  }

  private getPreviosStatus(key, i,statsuName): void {
    if (key === 'book' && this.setskippedStatus && statsuName[i].id === 12) {
      this.max = 7;
    } else {
      key === 'book'?this.max = i - 1:key === 'vat'? this.vatMax = i-1:key === 'acc'?this.accountMax = i-1:this.accountNewMax =i-1;
    }
  }

  public openConfirmationDialog(key, value, statsuName): void {
    let previous;
    if(key === 'book' && this.setskippedStatus && statsuName[value].id === 12) {
      previous = 7;
    }
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : `This will revert to the previous task: ${previous=== undefined?statsuName[value - 1].text:statsuName[previous].text}`,
      dismissible: true,
      actions:{
        confirm :{
          show : true,
          label: 'Yes',
          color: 'warn'
        }
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if(result === 'confirmed') {
        this.getPreviosStatus(key, value, statsuName);
      }
    });
  }


  public statusChanged(toggle:boolean): void {
    if(toggle) {
      this.displayedColumns = ['companyName','onboarding','bookKeepingStatus','vatStatus','accountsStatus1','accountsStatus2'];
    } else {
      this.displayedColumns = this.userService.getColumns();
    }
  }

  public subColHide(toggle:boolean, name): void {
    if(toggle) {
      this.displayedColumns = this.userService.getColumns();
    } else {
      if(name === 'book') {
        const bookColumns = ['bookkeeper','completionweek','bookKeepingStatus'];
        this.displayedColumns = this.displayedColumns.filter(item => !bookColumns.includes(item));
      } else if(name === 'vat') {
        const bookColumns = ['vatRegistered','vatQuarter','vatscheme','vatStatus'];
        this.displayedColumns = this.displayedColumns.filter(item => !bookColumns.includes(item));
      }
    }
  }

  public openOnboarding(): void {
    const dialogRef = this.dialog.open(OnbordingFormComponent, {
      width: '60vw',
      data: { typeForm: 'edit' }
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe();
  }

  private triggerStatusSnackBar(data, plan): void {
    const snackBarParams: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: plan == 'book'?'book-snack-bar':plan == 'vat'?'vat-snack-bar':plan == 'acc' || plan == 'accNew'?'acc-snack-bar':'default-snack-bar',
      data: { item: data, plan: plan }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

  private getUsersStatusInfo(): void {
    this.userService.getUsersStatus().pipe(takeUntil(this.destroyer$))
    .subscribe(state => {
      if(state) this.showVatStatusBtn = true, this.vatMax = state.order -1;
    });
  }

  private openStatusJumpDialogue(set) {
    const dialogRef = this.dialog.open(BookkeepingStatusComponent, {
      width: '30vw',
      data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(res => {
      if(res) {
        this.max = res.fetch.value; 
        this.setskippedStatus = true;
        this.triggerStatusSnackBar(res.fetch, 'book');
      }
    });
  }

  public startUpdates(key, status): void {
    const messgae = key === 'start'?'Start Bookkeeping Process for Bespoke Alpha Solutions for May':'Cancel Bookkeeping Status for Bespoke Alpha Solutions for May';
    const vatMessgae = key === 'start'?'Start VAT Process for Bespoke Alpha Solutions for May':'Cancel VAT Status for Bespoke Alpha Solutions for May';
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : status === 'bookkeep'?messgae:vatMessgae,
      dismissible: true,
      actions:{
        confirm :{
          show : true,
          label:  key === 'start'?'Start':'Yes',
          color: 'warn'
        }
      },
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if(result === 'confirmed') {
        if(status === 'bookkeep') {
          key === 'start'?this.showStatusBtn = true: this.showStatusBtn = false;
        } else {
          if(key === 'start') {
            this.showVatStatusBtn = true;
            this.showStatusBtn = true;
          } else {
            this.showVatStatusBtn = false;
          }
        }
      }
    });
  }

  private getPageState(): void {
    this.userService.getConfig().pipe(takeUntil(this.destroyer$))
    .subscribe(state => {
      this.pageState = state;
    });
  }

  public chosenMonthHandler(normalizedMonth): void {
    this.userService.setConfig({ selectedDate: moment(normalizedMonth.value) });
  }

  public decrementDay(): void {
    const count = moment(this.pageState.selectedDate).subtract(1, 'month').daysInMonth();
     const params: ICalendarState = {
      selectedDate: moment(this.pageState.selectedDate).subtract(count, 'd')
    };
    this.userService.setConfig(params);
    this.date.setValue(this.pageState.selectedDate);
  }

  public incrementDay(): void {
    const count = moment(this.pageState.selectedDate).add(1, 'month').daysInMonth();
    const params: ICalendarState = {
      selectedDate: moment(this.pageState.selectedDate).add(count, 'd')
    };
    this.userService.setConfig(params);
    this.date.setValue(this.pageState.selectedDate);
  }
 
}