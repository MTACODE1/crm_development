import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { Subject, takeUntil } from 'rxjs';
import { DialogData, OnboardingItems } from './onborading-item';

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {
  taskList: OnboardingItems[] = [];
  private readonly destroyer$: Subject<void> = new Subject();

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: DialogData, private taskService: TasksMockApi, private userService: UserService,
    private _fuseConfirmationService: FuseConfirmationService) { }

  ngOnInit(): void {
    this.loadDataStatus();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private loadDataStatus(): void {
    this.taskList = this.data.stausList.map(data => ({
      ...data,
      type: data.static_id <= 8 ? 'profession' : data.static_id >= 9 && data.static_id <= 11 ? 'vat' : 'software',
      selected: data.t_status === '2' ? true : false
    }));
  }

  public statusChanged(event, item): void {
    const task = { id: item.task_id, t_status: event ? 2 : 1 }
    this.updateOnBordings(task, item);
  }

  private updateOnBordings(task, item?): void {
    this.taskService.updateTaskStatus(task).pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result['err_msg']) {
        alert(result['err_msg']);
       item.selected = false;
      } else {
        this.getTableDetails();
      }
    });
  }

  private getTableDetails(): void {
    this.userService.getUserTable(this.data.params).pipe(takeUntil(this.destroyer$)).subscribe(result => {
      const currentuser = result['rows'].find(item => item.id == this.data.params.id);
      this.data.stausList = currentuser.onboaring_status;
      this.loadDataStatus();
    });
  }

  public toggleData(item: OnboardingItems, status: boolean): void {
    const message = status ? `Add <b>${item.task}</b> to onboarding for client <b>${this.data.username}</b>` : `Remove <b>${item.task}</b> from onboarding for client <b>${this.data.username}</b>?`
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: message,
      dismissible: true,
      actions: {
        cancel: { label: 'No' },
        confirm: { label: 'Yes', color: 'warn' }
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result === 'confirmed') {
        const task = { id: item.task_id, t_status: status ? 1 : 0 }
        this.updateOnBordings(task);
      }
    });
  }

}