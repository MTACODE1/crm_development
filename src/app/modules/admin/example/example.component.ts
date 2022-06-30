import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { ICalendarState, UserService } from 'app/core/user/user.service';
import * as moment from "moment";
import { Subject, takeUntil } from 'rxjs';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { TableModel } from './../../../core/user/user.types';
import { AssessmentStatusComponent } from './assessment-status/assessment-status.component';
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
  myclientSelected: boolean;
  today = moment(new Date());
  searchTerm: null;
  date = new FormControl(moment());
  public pageState: ICalendarState;
  showStatusBtn: boolean = false;
  showVatStatusBtn: boolean = false;
  showAccStatusBtn: boolean = false;
  showAcc2StatusBtn: boolean = false;
  classApplied: boolean = false;

  public paginationConfig = {
    limit: 10,
    offset: 0,
    total: 20
  }
  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService,
    public readonly dialog: MatDialog, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns();
    this.getTableDetails();
    this.getUsersStatusInfo();
    // this.getPageState();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private getTableDetails(): void {
    const Params = {
      client_status: 1,
      month: this.date.value.format('MMM-yy'),
      limit: this.paginationConfig.limit,
      offset: this.paginationConfig.offset
    }
    this.userService.getUserTable(Params).pipe(takeUntil(this.destroyer$))
    .subscribe(res => {
      this.userTableList = res['rows'];
      this.paginationConfig.total = res['total_count'];
    });
  }

  public onPageChange(event): void {
    this.paginationConfig = { ...this.paginationConfig, ...event };
    this.getTableDetails();
  }

  public getNextStatus(data, i,statsuName, id): void {
    console.log(statsuName, 'statsusName')
    if (data === 'bookkeeping' && statsuName[i].static_id === 7 ) {
      this.openStatusJumpDialogue('setFirst', id);
    } else if(data === 'bookkeeping' && (statsuName[i].static_id === 8 ||statsuName[i].static_id === 9 || statsuName[i].static_id === 10)) {
      // this.max = 11;
      this.updateStatus(statsuName[11], id, data, true);
      // this.triggerStatusSnackBar(statsuName[11], data);
    }  else {
      // data === 'bookkeeping'?this.max = i + 1:data === 'vat'? this.vatMax = i + 1:data === 'acc'?this.accountMax = i+1:this.accountNewMax = i + 1;
      // this.triggerStatusSnackBar(statsuName[i + 1], data);
      this.updateStatus(statsuName[i +1], id, data, true);
    }
   
  }

  private updateStatus(item, clientId, key, showSnackBar:boolean) {
    const task = {
      uid: clientId,
      process: key,
      month:this.date.value.format('MMM-yy'),
      p_status: item.static_id
    }
    console.log(task, '%%%')
    this.userService.updateTaskStatus(task).subscribe(result => {
      if(result['err_msg']) {
        alert(result['err_msg']);
      } else {
        this.getTableDetails();
        if(showSnackBar) this.triggerStatusSnackBar(item, key);
      }
    })
  }

  public toggleClass(): void {
    this.classApplied = !this.classApplied;
  }

  private getPreviosStatus(key, i,statsuName, id): void {
    if (key === 'bookkeeping' && (statsuName[i].static_id === 11 || (statsuName[i].static_id === 10 ||statsuName[i].static_id === 9 || statsuName[i].static_id === 8))) {
      // this.max = 7;
      this.updateStatus(statsuName[7], id, key, false);
    } else {
      // key === 'bookkeeping'?this.max = i - 1:key === 'vat'? this.vatMax = i-1:key === 'acc'?this.accountMax = i-1:this.accountNewMax =i-1;
      this.updateStatus(statsuName[i -1], id, key, false);
    }
  
  }

  public openConfirmationDialog(key, value, statsuName, id): void {
    let previous;
    if(key === 'bookkeeping' &&  (statsuName[value].static_id === 11|| (statsuName[value].static_id === 10 ||statsuName[value].static_id === 9 || statsuName[value].static_id === 8))) {
      previous = 7;
    }
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : `This will revert to the previous task: ${previous=== undefined?statsuName[value - 1].task:statsuName[previous].task}`,
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
        this.getPreviosStatus(key, value, statsuName, id);
      }
    });
  }


  public statusChanged(toggle:boolean): void {
    if(toggle) {
      this.displayedColumns = ['companyName','onboarding','bookKeepingStatus','vatStatus','accountsStatus1','accountsStatus2','self1','self2'];
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
      panelClass: plan == 'bookkeeping'?'book-snack-bar':plan == 'vat'?'vat-snack-bar':plan == 'acc' || plan == 'accNew'?'acc-snack-bar':'default-snack-bar',
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

  private openStatusJumpDialogue(set, ClientId) {
    const dialogRef = this.dialog.open(BookkeepingStatusComponent, {
      width: '30vw',
      data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(res => {
      if(res) {
        console.log(res)
        // this.max = res.fetch.value; 
        // this.triggerStatusSnackBar(res.fetch, 'book');
        this.updateStatus(res.fetch, ClientId, 'bookkeeping', true);
      }
    });
  }

  public startUpdates(key, status, statusItem, ClientId): void {
    const messgae = key === 'start'?'Start Bookkeeping Process for Bespoke Alpha Solutions for May?':'Cancel Bookkeeping Status for Bespoke Alpha Solutions for May?';
    const vatMessgae = key === 'start'?'Start VAT Process for Bespoke Alpha Solutions for May?':'Cancel VAT Status for Bespoke Alpha Solutions for May?';
    const accMessgae = key === 'start'?'Start Accounts Process for Bespoke Alpha Solutions for May?':'Cancel Accounts Process for Bespoke Alpha Solutions?';
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : status === 'bookkeep'?messgae:status === 'vat'?vatMessgae:accMessgae,
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
          if(key === 'start') {
            // this.showStatusBtn = true;
            // this.triggerStatusSnackBar(statusItem[0], 'book')
            this.updateStatus(statusItem[0], ClientId, 'bookkeeping', true);
          } else {
            this.removeStatus(ClientId, 'bookkeeping');
          } 
        } else if(status === 'vat') {
          if(key === 'start') {
            // this.showVatStatusBtn = true;
            // this.showStatusBtn = true;
            // this.triggerStatusSnackBar(this.userTableList[0].vatStatus[0], status)
            this.updateStatus(statusItem[0], ClientId, 'vat', true);
          } else {
            // this.showVatStatusBtn = false;
            this.removeStatus(ClientId, 'vat');
          }
        } else if(status === 'acc') {
          if(key === 'start') {
            this.showAccStatusBtn = true;
            // this.triggerStatusSnackBar(this.userTableList[0].accountsStatus1[0], status)
            this.updateStatus(statusItem[0], ClientId, 'acc', true);
          } else {
            // this.showAccStatusBtn = false;
            this.removeStatus(ClientId, 'acc');
          }
        } else {
          if(key === 'start') {
            // this.showAcc2StatusBtn = true;
            // this.triggerStatusSnackBar(this.userTableList[0].accountsStatus2[0], status)
            this.updateStatus(statusItem[0], ClientId, 'acc', true);
          } else {
            this.showAcc2StatusBtn = false;
          }
        }
      }
    });
  }

  private removeStatus(ClientId, process) {
    const statusParam = {
      uid:ClientId,
      month:this.date.value.format('MMM-yy'),
      process:process
    }
    console.log(statusParam)
    // this.userService.cancelStatus(statusParam).pipe(takeUntil(this.destroyer$))
    // .subscribe(cancelledData =>{
    //   console.log(cancelledData);
    // });
  }

  // private getPageState(): void {
  //   this.userService.getConfig().pipe(takeUntil(this.destroyer$))
  //   .subscribe(state => {
  //     this.pageState = state;
  //   });
  // }

  // public chosenMonthHandler(normalizedMonth): void {
  //   this.userService.setConfig({ selectedDate: moment(normalizedMonth.value) });
  // }

  // public decrementDay(): void {
  //   const count = moment(this.pageState.selectedDate).subtract(1, 'month').daysInMonth();
  //    const params: ICalendarState = {
  //     selectedDate: moment(this.pageState.selectedDate).subtract(count, 'd')
  //   };
  //   this.userService.setConfig(params);
  //   this.date.setValue(this.pageState.selectedDate);
  // }

  // public incrementDay(): void {
  //   const count = moment(this.pageState.selectedDate).add(1, 'month').daysInMonth();
  //   const params: ICalendarState = {
  //     selectedDate: moment(this.pageState.selectedDate).add(count, 'd')
  //   };
  //   this.userService.setConfig(params);
  //   this.date.setValue(this.pageState.selectedDate);
  // }


  chosenMonthHandler(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  calculateMonth(value) {
    value === 'decrement'?this.date.setValue(this.date.value.subtract(1, 'month')):this.date.setValue(this.date.value.add(1, 'month'));
    this.getTableDetails();
  }

  public editAssessment() {
    const dialogRef = this.dialog.open(AssessmentStatusComponent, {
      width: '50vw',
      // data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
     console.log(result);
    });
  }
 
}