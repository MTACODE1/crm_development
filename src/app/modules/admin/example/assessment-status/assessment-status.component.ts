import { Subject, takeUntil } from 'rxjs';
import { ONBOARDING_TASK_ITEMS } from './../../task-list/task-items';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskItem } from '../../task-list/task-items';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-assessment-status',
  templateUrl: './assessment-status.component.html',
  styleUrls: ['./assessment-status.component.scss']
})
export class AssessmentStatusComponent implements OnInit, OnDestroy {

  tasks: TaskItem[];
  max = 0;
  showStatusBtn: boolean = false;
  classApplied: boolean = false;

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(public readonly dialogRef: MatDialogRef<AssessmentStatusComponent>,
    private _fuseConfirmationService: FuseConfirmationService, private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadOnboardingStatus()
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private loadOnboardingStatus(): void {
    this.tasks = ONBOARDING_TASK_ITEMS.map(item => {
      return item;
    });
  }

  
  public getNextStatus(data, i,statsuName): void {
    this.max = i + 1
    this.triggerStatusSnackBar(statsuName[i + 1], data);
  }

  private getPreviosStatus(i): void {
    this.max = i - 1
  }

  private triggerStatusSnackBar(data, plan): void {
    const snackBarParams: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:'self-snack-bar',
      data: { item: data, plan: plan }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

  public openConfirmationDialog(value, statsuName): void {
    const dialogRef = this._fuseConfirmationService.open({
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
        this.getPreviosStatus(value);
      }
    });
  }


  public startUpdates(key): void {
    const messgae = key === 'start'?'Self Assessment Process':'Cancel Self Assessment Status';
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : messgae,
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
        if(key === 'start') {
          this.showStatusBtn = true;
          this.triggerStatusSnackBar(this.tasks[0].bookKeepingStatus[0], 'self')
        } else {
          this.showStatusBtn = false;
        }
      }
    });
  }

  public toggleClass(): void {
    this.classApplied = !this.classApplied;
  }
}
