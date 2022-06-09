import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { filter, Subject, takeUntil } from 'rxjs';
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
  public columSort = [ 
    {name:'Company Name', value:'companyName'},
    {name:'BookKeeping Status', value:'bookKeepingStatus'},
    {name:'May VAT Status', value:'vatStatus'},
    {name:'2021 Accounts Status', value:'accountsStatus1'},
    {name:'2022 Accounts Status', value:'accountsStatus2'},
  ]

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private userService: UserService, private _fuseConfirmationService: FuseConfirmationService,
    public readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = this.userService.getColumns();
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

   getWeekNumOfMonthOfDate(d) {
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
  }

  public getNextStatus(data, i): void {
    data=== 'book'?this.max = i + 1:data === 'vat'? this.vatMax = i + 1:data === 'acc'?this.accountMax = i+1:this.accountNewMax = i + 1;
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

  public radioChange(item): void {
    this.displayedColumns = this.userService.getColumns();
    const colIndex = this.displayedColumns.findIndex(col => col === item);
    if (colIndex != -1) {
      this.displayedColumns.splice(colIndex, 1);
    }
  }

  public openOnboarding(): void {
    const dialogRef = this.dialog.open(OnbordingFormComponent, {
      width: '60vw',
      data: { typeForm: 'edit' }
    });

    dialogRef.afterClosed().pipe(filter(s => !!s), takeUntil(this.destroyer$))
      .subscribe(() => {
      
    });
  }

}