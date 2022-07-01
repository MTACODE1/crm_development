import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
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
  displayedColumns: string[] = [];
  userTableList: TableModel[] = [];
  featureStatus: boolean;
  myclientSelected: boolean;
  today = moment(new Date());
  searchTerm: null;
  date = new FormControl(moment());

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

  public getNextStatus(data, i,statsuName, item): void {
    if (data === 'bookkeeping' && statsuName[i].static_id === 7 ) {
      this.openStatusJumpDialogue('setFirst', item);
    } else if(data === 'bookkeeping' && (statsuName[i].static_id === 8 ||statsuName[i].static_id === 9 || statsuName[i].static_id === 10)) {
      this.updateStatus(statsuName[11], item, data, true);
    }  else {
      this.updateStatus(statsuName[i +1], item, data, true);
    }
   
  }

  private updateStatus(item, element, key, showSnackBar:boolean) {
    let lastYear = this.today.year() -1;
    const task = {
      uid: element.id,
      process: key,
      month:key === 'annual_accounts'?element.annual_accounts_month + '-' + lastYear :this.date.value.format('MMM-yy'),
      p_status: item.static_id
    }
    this.userService.updateTaskStatus(task).subscribe(result => {
      if(result['err_msg']) {
        alert(result['err_msg']);
      } else {
        this.getTableDetails();
        if(showSnackBar) this.triggerStatusSnackBar(item, key);
      }
    })
  }

  private getPreviosStatus(key, i,statsuName, item): void {
    if (key === 'bookkeeping' && (statsuName[i].static_id === 11 || (statsuName[i].static_id === 10 ||statsuName[i].static_id === 9 || statsuName[i].static_id === 8))) {
      this.updateStatus(statsuName[7], item, key, false);
    } else {
      this.updateStatus(statsuName[i -1], item, key, false);
    }
  }

  public openConfirmationDialog(key, value, statsuName, item): void {
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
        this.getPreviosStatus(key, value, statsuName, item);
      }
    });
  }

  public statusChanged(toggle:boolean): void {
    if(toggle) {
      this.displayedColumns = ['companyName','logo','onboarding','bookKeepingStatus','vatStatus','accountsStatus1','accountsStatus2','self1','self2'];
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
      panelClass: plan == 'bookkeeping'?'book-snack-bar':plan == 'vat'?'vat-snack-bar':plan == 'annual_accounts' || plan == 'accNew'?'acc-snack-bar':'default-snack-bar',
      data: { item: data, plan: plan }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

  private openStatusJumpDialogue(set, item) {
    const dialogRef = this.dialog.open(BookkeepingStatusComponent, {
      width: '30vw',
      data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(res => {
      if(res) {
      this.updateStatus(res.fetch, item, 'bookkeeping', true);
      }
    });
  }

  public startUpdates(key, status, statusItem, item): void {
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
            this.updateStatus(statusItem[0], item, 'bookkeeping', true);
          } else {
            this.removeStatus(item, 'bookkeeping');
          } 
        } else if(status === 'vat') {
          if(key === 'start') {
            this.updateStatus(statusItem[0], item, 'vat', true);
          } else {
            this.removeStatus(item, 'vat');
          }
        } else if(status === 'annual_accounts') {
          if(key === 'start') {
            this.updateStatus(statusItem[0], item, 'annual_accounts', true);
          } else {
            this.removeStatus(item, 'annual_accounts');
          }
        } else {
          if(key === 'start') {
            this.updateStatus(statusItem[0], item, 'acc', true);
          } else {
            // this.showAcc2StatusBtn = false;
          }
        }
      }
    });
  }

  private removeStatus(item, process) {
    let lastYear = this.today.year() -1;
    const statusParam = {
      uid:item.id,
      month:process === 'annual_accounts'?item.annual_accounts_month + '-' + lastYear :this.date.value.format('MMM-yy'),
      process:process
    }
    this.userService.cancelStatus(statusParam).pipe(takeUntil(this.destroyer$))
    .subscribe(_ => {
      this.getTableDetails();
    });
  }

  public chosenMonthHandler(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>): void {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  public calculateMonth(value): void {
    value === 'decrement'?this.date.setValue(this.date.value.subtract(1, 'month')):this.date.setValue(this.date.value.add(1, 'month'));
    this.getTableDetails();
  }

  public editAssessment(): void {
    const dialogRef = this.dialog.open(AssessmentStatusComponent, {
      width: '50vw',
      // data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
     console.log(result);
    });
  }
 
}