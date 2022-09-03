import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import * as moment from "moment";
import { Subject, takeUntil } from 'rxjs';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { TableModel } from './../../../core/user/user.types';
import { AssessmentStatusComponent } from './assessment-status/assessment-status.component';
import { BookkeepingStatusComponent } from './bookkeeping-status/bookkeeping-status.component';
import { OnbordingFormComponent } from './onbording-form/onbording-form.component';
import { TableUtil } from './TableUtil';
import { Router, ActivatedRoute, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ExampleComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<TableModel>;
  userTableList: TableModel[] = [];
  featureStatus: boolean = false;
  myclientSelected: boolean = false;
  today = moment(new Date());
  searchTerm: string;
  accountant_id:any;
  date = new FormControl(moment());
  lastMonth: any;
  isSticky: boolean;
  public paginationConfig = {
    limit: 10,
    offset: 0,
    total: 10,
  
  }
  private readonly destroyer$: Subject<void> = new Subject();
  id: string;


  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService, private acivate:ActivatedRoute,
    public readonly dialog: MatDialog, private readonly snackBar: MatSnackBar, private readonly cd: ChangeDetectorRef, private breakpointObserver: BreakpointObserver,private router: Router) {
    this.breakpointObserver.observe(["(max-width: 525px)"]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isSticky = false;
      }
      else {
        this.isSticky = true;
      }
    })
  }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns(); 
    this.cd.detectChanges();
    let id =  this.router.url.split('/')[2];
    if(id){
      const params = { accountId: id };
      this.getTableDetails(params);
    }else{
      this.getTableDetails({});
    }

  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  exportTable() {
    TableUtil.exportTableToExcel("ExampleMaterialTable");
  }

  private getTableDetails(additionalParams): void {
    const params = {
      month: this.date.value.format('MMM-yy'),
      limit: this.paginationConfig.limit,
      offset: this.paginationConfig.offset,
      
    }
    if (additionalParams && additionalParams.user) {
      params['user'] = additionalParams.user;
    }
    if (additionalParams && additionalParams.search) {
      params['search'] = additionalParams.search;
    }
    if (additionalParams && additionalParams.accountId) {
      params['accountant_id'] = Number(additionalParams.accountId);
    }
    
    this.userService.getUserTable(params).pipe(takeUntil(this.destroyer$)).subscribe(res => {
      this.userTableList = res['rows'];
      this.paginationConfig.total = res['total_count'];
      this.lastMonth = moment(this.date.value).subtract(1, 'month');
      this.cd.detectChanges();
    });
  }


  public searchChange(value): void {
    const params = { search: value };
    this.getTableDetails(params);
  }

  public sortData(sort: Sort): void {
    const data = this.userTableList.slice();
    if (!sort.active || sort.direction === '') {
      this.userTableList = data;
      return;
    }
    this.userTableList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'bookKeepingStatus': return ExampleComponent.compare(a['bookkeeping_status_saved'], b['bookkeeping_status_saved'], isAsc);
        case 'vatStatus': return ExampleComponent.compare(a['vat_status_saved'], b['vat_status_saved'], isAsc);
        case 'accountsStatus1': return ExampleComponent.compare(a['annual_accounts_saved_1'], b['annual_accounts_saved_1'], isAsc);
        case 'accountsStatus2': return ExampleComponent.compare(a['annual_accounts_saved_2'], b['annual_accounts_saved_2'], isAsc);
        default: return 0;
      }
    });
  }

  private static compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public onPageChange(event): void {
    this.paginationConfig = { ...this.paginationConfig, ...event };
    const params = { search: this.searchTerm };
    this.getTableDetails(params);
  }

  public getNextStatus(data, i, statsuName, item): void {
    if (data === 'bookkeeping' && statsuName[i].static_id === 7) {
      this.openStatusJumpDialogue('setFirst', item);
    } else if (data === 'bookkeeping' && (statsuName[i].static_id === 8 || statsuName[i].static_id === 9 || statsuName[i].static_id === 10)) {
      this.updateStatus(statsuName[11], item, data, true);
    } else {
      this.updateStatus(statsuName[i + 1], item, data, true);
    }
  }

  private updateStatus(item, element, key, showSnackBar: boolean): void {
    let lastYear = this.today.year() - 1;
    const task = {
      uid: element.id,
      process: key === 'annual_accounts' || key === 'accNew' ? 'annual_accounts' : key,
      month: key === 'annual_accounts' ? element.annual_accounts_month + '-' + lastYear : key === 'accNew' ? element.annual_accounts_month + '-' + this.today.year() : key === 'bookkeeping' || key === 'vat' ? this.lastMonth.format('MMM-yy') : this.date.value.format('MMM-yy'),
      p_status: key === 'onboarding' ? 0 : item.static_id
    }
    this.userService.updateTaskStatus(task).subscribe(result => {
        if(this.searchTerm){
          this.searchChange(this.searchTerm);
        }else {
          this.getTableDetails({});
        }
      if (result['err_msg']) {
        alert(result['err_msg']);
      } else {
        if (showSnackBar) this.triggerStatusSnackBar(item, key);
      }
    });
  }

  private getPreviosStatus(key, i, statsuName, item): void {
    if (key === 'bookkeeping' && (statsuName[i].static_id === 11 || (statsuName[i].static_id === 10 || statsuName[i].static_id === 9 || statsuName[i].static_id === 8))) {
      this.updateStatus(statsuName[7], item, key, false);
    } else {
      this.updateStatus(statsuName[i - 1], item, key, false);
    }
  }

  public openConfirmationDialog(key, value, statsuName, item): void {
    let previous;
    if (key === 'bookkeeping' && (statsuName[value].static_id === 11 || (statsuName[value].static_id === 10 || statsuName[value].static_id === 9 || statsuName[value].static_id === 8))) {
      previous = 7;
    }
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: `This will revert to the previous task: ${previous === undefined ? statsuName[value - 1].task : statsuName[previous].task}`,
      dismissible: true,
      actions: {
        confirm: {
          show: true,
          label: 'Yes',
          color: 'warn'
        }
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result === 'confirmed') {
        this.getPreviosStatus(key, value, statsuName, item);
      }
    });
  }

  public statusChanged(toggle: boolean): void {
    if (toggle) {
      this.displayedColumns = ['companyName', 'logo', 'onboarding', 'bookKeepingStatus', 'vatStatus', 'accountsStatus1', 'accountsStatus2', 'self1', 'self2', 'confirmationStatus'];
    } else {
      this.displayedColumns = this.userService.getColumns();
    }
  }

  public slectMyClient(event: boolean): void {
    if (event) {
      const user = JSON.parse(localStorage.getItem('loginUser'));
      this.getTableDetails({ user: user.user_id });
    } else {
      this.getTableDetails({});
    }
  }

  public openOnboarding(data): void {
    const params = {
      month: this.date.value.format('MMM-yy'),
      limit: this.paginationConfig.limit,
      offset: this.paginationConfig.offset,
      id: data.id
    }
    const dialogRef = this.dialog.open(OnbordingFormComponent, {
      width: '60vw',
      disableClose: true,
      data: {
        typeForm: 'edit', stausList: data?.onboarding_status, username: `${data?.name} ${data?.surname}`,
        params: params
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe();
  }

  public allCompleted(status): boolean {
    return status.every(item => { item.t_status === '2' });
  }

  private triggerStatusSnackBar(data, plan): void {
    const snackBarParams: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: plan == 'bookkeeping' ? 'book-snack-bar' : plan == 'vat' ? 'vat-snack-bar' : plan == 'annual_accounts' || plan == 'accNew' ? 'acc-snack-bar' : 'default-snack-bar',
      data: { item: data, plan: plan }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

  private openStatusJumpDialogue(set, item): void {
    const dialogRef = this.dialog.open(BookkeepingStatusComponent, {
      width: '30vw',
      data: set
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(res => {
      if (res) this.updateStatus(res.fetch, item, 'bookkeeping', true);
    });
  }

  public startUpdates(status, item): void {
    let lastYear = this.today.year() - 1;
    const onboardingMessage = `Start Onboarding Process for Bespoke Alpha Solutions for ${this.date.value.format('YYYY')}?`;
    const messgae = `Start Bookkeeping Process for Bespoke Alpha Solutions for ${this.date.value.format('MMMM')}?`;
    const vatMessgae = `Start VAT Process for Bespoke Alpha Solutions for ${this.date.value.format('MMMM')}?`;
    const accMessgae = `Start Accounts Process for Bespoke Alpha Solutions for ${this.date.value.format('YYYY')}?`;
    const accStatMessage = `Start Accounts Process for Bespoke Alpha Solutions for ${lastYear}?`;
    const confirmMessgae = `Start Confirmation Statement process for Bespoke Alpha Solutions for ${this.date.value.format('YYYY')}?`;
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: status === 'bookkeeping' ? messgae : status === 'vat' ? vatMessgae : status === 'conf_stmt' ? confirmMessgae : status === 'onboarding' ? onboardingMessage : status === 'annual_accounts' ? accStatMessage : accMessgae,
      dismissible: true,
      actions: {
        confirm: {
          show: true,
          label: 'Start',
          color: 'warn'
        }
      },
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result === 'confirmed') {
        if (status === 'bookkeeping') {
          this.updateStatus(item.bookkeeping_status[0], item, 'bookkeeping', true);
        } else if (status === 'vat') {
          this.updateStatus(item.vat_status[0], item, 'vat', true);
          if (!item.bookkeeping_status_saved) {
            this.updateStatus(item.bookkeeping_status[0], item, 'bookkeeping', true);
          }
        } else if (status === 'annual_accounts') {
          this.updateStatus(item.annual_accounts_status_1[0], item, 'annual_accounts', true);
        } else if (status === 'accNew') {
          this.updateStatus(item.annual_accounts_status_2[0], item, 'accNew', true);
        } else if (status === 'conf_stmt') {
          this.updateStatus(item.conf_stmt_status[0], item, 'conf_stmt', true);
        }
        else {
          this.updateStatus(item.onboarding_status[0], item, 'onboarding', true);
        }
      }
    });
  }

  public endUpdates(status, item): void {
    const messgae = `Cancel Bookkeeping Status for Bespoke Alpha Solutions for ${this.date.value.format('MMMM')}?`;
    const vatMessgae = `Cancel VAT Status for Bespoke Alpha Solutions for ${this.date.value.format('MMMM')}?`;
    const accMessgae = 'Cancel Accounts Process for Bespoke Alpha Solutions?';
    const confirmMessgae = 'Cancel Confirmation Statement Process for Bespoke Alpha Solutions?';
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: status === 'bookkeeping' ? messgae : status === 'vat' ? vatMessgae : status === 'conf_stmt' ? confirmMessgae : accMessgae,
      dismissible: true,
      actions: {
        confirm: {
          show: true,
          label: 'Yes',
          color: 'warn'
        }
      },
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result === 'confirmed') {
        this.removeStatus(item, status);
      }
    });
  }

  private removeStatus(item, process): void {
    let lastYear = this.today.year() - 1;
    const statusParam = {
      uid: item.id,
      month: process === 'annual_accounts' ? item.annual_accounts_month + '-' + lastYear : process === 'accNew' ? item.annual_accounts_month + '-' + this.today.year() : this.date.value.format('MMM-yy'),
      process: process === 'annual_accounts' || process === 'accNew' ? 'annual_accounts' : process,
    }
    this.userService.cancelStatus(statusParam).pipe(takeUntil(this.destroyer$)).subscribe(_ => {
      this.getTableDetails({});
    });
  }

  public chosenMonthHandler(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>): void {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.getTableDetails({});
  }

  public calculateMonth(value): void {
    value === 'decrement' ? this.date.setValue(this.date.value.subtract(1, 'month')) : this.date.setValue(this.date.value.add(1, 'month'));
    this.getTableDetails({});
  }

  public editAssessment(dataItem, type): void {
    const Params = {
      month: this.date.value.format('MMM-yy'),
      limit: this.paginationConfig.limit,
      offset: this.paginationConfig.offset
    }
    const dialogRef = this.dialog.open(AssessmentStatusComponent, {
      width: '50vw',
      data: { data: dataItem, type: type, parameter: Params }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result) this.getTableDetails({});
    });
  }

  public toggleClass(statusData, key, item): void {
    const param = {
      uid: item.id,
      process: key === 'annual_accounts' || key === 'accNew' ? 'annual_accounts' : key,
      month: key === 'annual_accounts' ? this.date.value.subtract(1, 'year').format('MMM-yy') : this.date.value.format('MMM-yy'),
      escalate: !statusData.escalated
    }
    this.userService.escalateStatusTask(param).pipe(takeUntil(this.destroyer$)).subscribe(_ => {
      this.getTableDetails({});
    });
  }

}