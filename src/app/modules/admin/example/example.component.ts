import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { filter, Subject, takeUntil } from 'rxjs';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { TableModel } from './../../../core/user/user.types';
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

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService,
    public readonly dialog: MatDialog, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns();
    this.getTableDetails();
    this.getUsersStatusInfo();
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
    data=== 'book'?this.max = i + 1:data === 'vat'? this.vatMax = i + 1:data === 'acc'?this.accountMax = i+1:this.accountNewMax = i + 1;
    this.triggerStatusSnackBar(statsuName[i + 1], data);
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
 
}