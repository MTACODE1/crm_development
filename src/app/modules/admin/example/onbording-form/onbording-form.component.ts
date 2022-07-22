import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { OnboardingItems } from './onborading-item';

export interface DialogData {
  typeForm: string;
  stausList: OnboardingItems[];
}

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {
  taskList: OnboardingItems[] = [];
  

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: DialogData, private userService: UserService,
    public readonly dialogRef: MatDialogRef<OnbordingFormComponent>, private _fuseConfirmationService: FuseConfirmationService) { }

  ngOnInit(): void {
    this.loadDataStatus();
  }

  private loadDataStatus(): void {
    this.taskList = this.data.stausList.map(data => ({
      ...data,
      type: data.static_id <= 8 ? 'profession' : data.static_id >= 9 && data.static_id <= 11 ? 'vat' : 'software',
      selected:data.t_status === '2'? true: false
    }));
  }

  public statusChanged(event, item): void {
    const task = {
      id: item.task_id,
      t_status: event?2:1
    }
   this.updateOnBordings(task);
  }

  private updateOnBordings(task) {
    this.userService.updateTaskStatus(task).subscribe(result => {
      if (result['err_msg']) {
        alert(result['err_msg']);
      }
    });
  }

  public toggleData(item: OnboardingItems, status: boolean): void {
    const message = status ? `Add <b>${item.task}</b> to onboarding for client name` : `Remove <b>${item.task}</b> from onboarding for client name?`
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: message,
      dismissible: true,
      actions: {
        cancel: { label: 'No' },
        confirm: { label: 'Yes', color: 'warn' }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirmed') {
        const task = {
          id: item.task_id,
          t_status: status?1:0
        }
        this.updateOnBordings(task);
      }
    });
  }

}