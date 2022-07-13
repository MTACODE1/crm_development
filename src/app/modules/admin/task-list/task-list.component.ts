import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { UserService } from 'app/core/user/user.service';
import { TableModel } from 'app/core/user/user.types';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { statusDataType, TaskListItems } from 'app/mock-api/apps/tasks/data';
import * as moment from "moment";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger("myTrigger", [
      state("fadeInFlash", style({ opacity: "1" })),
      transition("void => *", [
        style({ opacity: "0", transform: "translateY(20px)" }),
        animate("500ms")
      ]),
    ]),
  ]
})

export class TaskListComponent implements OnInit, OnDestroy {
  username = new FormControl();
  public users = [];
  selectedClient: TableModel;
  public taskListArr: TaskListItems[] = [
    {
      color: 'gray',
      name: 'Setup & Compliance',
      dataType: statusDataType.SETUP,
    },
    {
      color: 'yellow',
      name: 'Bookkeeping',
      dataType: statusDataType.BOOK,
    },
    {
      color: 'orange',
      name: 'VAT',
      dataType: statusDataType.VAT,
    },
    {
      color: 'pink',
      name: 'Annual Accounts',
      dataType: statusDataType.ANNUAL,
    },
    {
      color: 'green',
      name: 'Self Assessment',
      dataType: statusDataType.SELF,
    },
  ];

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private _fuseConfirmationService: FuseConfirmationService, private taskService: TasksMockApi,
    private userService: UserService) { }

  ngOnInit() {
    this.getTaskList({});
    this.getUserList();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private getTaskList(additionalParams): void {
    let param = {}
    if (additionalParams) {
      param = { ...additionalParams }
    }
    this.taskService.getTaskList(param).pipe(takeUntil(this.destroyer$)).subscribe(taskResponse => {
      const tasksList = taskResponse;
      Object.keys(tasksList).forEach(element => {
        this.taskListArr.map((data, index) => {
          if (data.dataType === element) {
            this.taskListArr[index].text = tasksList[element].length ? tasksList[element].sort((a, b) => (a.t_status - b.t_status)) : null;
          }
        });
      });
    });
  }

  public onClientChange(e): void {
    const params = {
      uid: e.value,
      month: moment(new Date()).format('MMM-yyyy')
    };
    this.username.setValue(e.value);
    this.getTaskList(params);
  }

  private getUserList(): void {
    this.userService.getUserTable({ client_status: 1 }).pipe(takeUntil(this.destroyer$)).subscribe(response => {
      this.users = response['rows'];
      this.selectedClient = this.users.find(item => item.id === this.username.value);
    });
  }


  public markCompleted(item: TaskListItems): void {
    const dialogRef = this._fuseConfirmationService.open({
      title: 'Are you sure?',
      message: item.t_status !== '2' ? `Mark <b>${item.text}</b> as completed ?` : `Mark <b>${item.text}</b> as uncompleted?`,
      dismissible: true,
      actions: {
        cancel: { label: 'No' },
        confirm: { label: 'Yes', color: 'warn' }
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$)).subscribe(result => {
      if (result === 'confirmed') {
        if (item.t_status !== '2') {
          this.moveCompleted(item, true);
        } else {
          this.moveCompleted(item, false);
        }
      }
    });
  }


  private moveCompleted(item: TaskListItems, completed: boolean): void {
    const task = {
      id: item.task_id,
      t_status: completed ? 2 : 1
    }
    this.taskService.updateTaskStatus(task).pipe(takeUntil(this.destroyer$)).subscribe(_ => {
      this.getTaskList({ uid: this.username.value, month: moment(new Date()).format('MMM-yyyy') });
    });
  }

}