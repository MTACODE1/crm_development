import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import * as moment from "moment";
import { Subject, takeUntil } from 'rxjs';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-assessment-status',
  templateUrl: './assessment-status.component.html',
  styleUrls: ['./assessment-status.component.scss']
})

export class AssessmentStatusComponent implements OnInit, OnDestroy {
  statusSaved: any;
  directors: any;
  today = moment(new Date());

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(public readonly dialogRef: MatDialogRef<AssessmentStatusComponent>,@Inject(MAT_DIALOG_DATA) public readonly data: any,
    private _fuseConfirmationService: FuseConfirmationService, private readonly snackBar: MatSnackBar, private userService: UserService) { }

  ngOnInit(): void {
    this.loadOnboardingStatus();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private loadOnboardingStatus(): void {
    if(this.data.type === 'self_assessment_1') {
      this.statusSaved = this.data.data.self_assessment_status_1;
      this.directors = this.data.data.self_assessment_directors_1;
    } else {
      this.statusSaved = this.data.data.self_assessment_status_2;
      this.directors = this.data.data.self_assessment_directors_2;
    }
  }
  
  public getNextStatus(data, i,statsuName, director): void {
    this.updateStatus(statsuName[i +1], data, true, director);
  }

  private getPreviosStatus(key, i,statsuName, director): void {
    this.updateStatus(statsuName[i -1], key, false, director);
  }


  private updateStatus(item, key, showSnackBar:boolean, director): void {
    const year = key === 'self_assessment_status_2'?this.today.year():this.today.year() -1;
    const task = {
      uid: this.data.data.id,
      process: 'self_assessment',
      month: 'Apr-' + year,
      p_status: item.static_id,
      director: director+1
    }
    this.userService.updateTaskStatus(task).subscribe(result => {
      if(result['err_msg']) {
        alert(result['err_msg']);
      } else {
        if(showSnackBar) this.triggerStatusSnackBar(item, key);
        this.userService.getUserTable({...this.data.parameter}).pipe(takeUntil(this.destroyer$))
        .subscribe(response => {
         this.data.data = response['rows'].find(item => item.id === this.data.data.id);
          this.loadOnboardingStatus();
        });
      }
    });
  }

  public openConfirmationDialog(key, value, statsuName, director): void {
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : `This will revert to the previous task: ${statsuName[value - 1].task}`,
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
        this.getPreviosStatus(key, value, statsuName, director);
      }
    });
  }


  public startUpdates(key, status, statusItem,director): void {
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
          this.updateStatus(statusItem[0], status, true, director);
        } else {
          this.removeStatus(status,director);
        }
      }
    });
  }

  private removeStatus(status,director): void {
    const year = status === 'self_assessment_status_2'?this.today.year():this.today.year() -1;
    const statusParam = {
      uid:this.data.data.id,
      month:'Apr-' + year,
      process: 'self_assessment',
      director: director+1
    }
    this.userService.cancelStatus(statusParam).pipe(takeUntil(this.destroyer$))
    .subscribe(_ => {
      this.dialogRef.close(true);
    });
  }

  private triggerStatusSnackBar(data, plan): void {
    const snackBarParams: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass:'self-snack-bar',
      data: { item: data, plan: plan, username:this.data.data.name + this.data.data.surname }
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

}
