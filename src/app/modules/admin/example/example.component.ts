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

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService,
    public readonly dialog: MatDialog, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns();
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
    if (data === 'book' && statsuName[i].id === 7 ) {
      this.openStatusJumpDialogue('setFirst');
    } else if(data === 'book' && statsuName[i].id === 11) {
      this.openStatusJumpDialogue('setSecond');
    } else {
      data === 'book'?this.max = i + 1:data === 'vat'? this.vatMax = i + 1:data === 'acc'?this.accountMax = i+1:this.accountNewMax = i + 1;
      this.triggerStatusSnackBar(statsuName[i + 1], data);
    }
  }

  private getPreviosStatus(key, i): void {
    key === 'book'?this.max = i - 1:key === 'vat'? this.vatMax = i-1:key === 'acc'?this.accountMax = i-1:this.accountNewMax =i-1;
  }

  public openConfirmationDialog(key, value, statsuName): void {
    const dialogRef = this._fuseConfirmationService.open(
      {
        title : 'Are you sure?',
        message : `This will revert to the previous task: ${statsuName[value - 1].text}`,
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
        this.getPreviosStatus(key, value);
      }
    });
  }


  statusChanged(toggle:boolean): void {
    if(toggle) {
      this.displayedColumns = ['companyName','onboarding','bookKeepingStatus','vatStatus','accountsStatus1','accountsStatus2'];
    } else {
      this.displayedColumns = this.userService.getColumns();
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
      panelClass: 'default-snack-bar',
      data: { item: data, plan: plan }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

  private getUsersStatusInfo(): void {
    this.userService.getUsersStatus().pipe(takeUntil(this.destroyer$))
    .subscribe(state => {
      if(state) this.vatMax = state.order -1;
    });
  }

  private openStatusJumpDialogue(set) {
    const dialogRef = this.dialog.open(BookkeepingStatusComponent, {
      width: '30vw',
      data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(res => {
      if(res) this.max = res.fetch.value;
    });
  }

  public startUpdates(key): void {
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : key === 'start'?'Start Bookkeeping Process for Bespoke Alpha Solutions for May':'Cancel Bookkeeping Status for Bespoke Alpha Solutions for May',
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
        key === 'start'?this.showStatusBtn = true: this.showStatusBtn = false;
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