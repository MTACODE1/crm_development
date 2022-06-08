import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { Subject, takeUntil } from 'rxjs';
import { TableModel } from './../../../core/user/user.types';

@Component({
  selector : 'example',
  templateUrl : './example.component.html',
  styleUrls: ['./example.component.scss'],
})

export class ExampleComponent implements OnInit, OnDestroy {
  max = 0;
  vatMax = 0;
  displayedColumns: string[] = ['companyName', 'customerName', 'package', 'accountant','bookkeeper','accountsTeam','companyType', 'lastDispo','lastEmail',
    'lastSms','openOne','openOff','bookKeepingStatus','unreconciled','last', 'accountsWith','vatRegistered', 'vatStatus', 'vatQuarter','lastVat','vat', 'payroll',
    'management','lastManagement','lastType','accountsStatus1','accountsStatus2','chNextAccountsDate','chConfirmatation','number','avgLast','avgLast1','clientBilling'];

  public userTableList: TableModel[];

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService) { }

  ngOnInit(): void {
    this.getTableDetails();
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

  public getNextStatus(data, i): void {
    data=== 'book'?this.max = i + 1: this.vatMax = i + 1;
  }

  private getPreviosStatus(key, i): void {
    key === 'book'?this.max = i - 1: this.vatMax = i-1;
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

}