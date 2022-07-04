import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { TasksMockApi } from 'app/mock-api/apps/tasks/api';
import { statusDataType, TaskListItems } from 'app/mock-api/apps/tasks/data';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger("myTrigger", [
      state("fadeInFlash",style({ opacity: "1"})),
      transition("void => *", [
        style({ opacity: "0", transform: "translateY(20px)" }),
        animate("500ms")
      ])
    ])
  ]
})

export class TaskListComponent implements OnInit, OnDestroy {
  username = new FormControl();
  public users = [
    {value: '1', viewValue: 'All Users'},
    {value: '2', viewValue: 'user 1'},
    {value: '3', viewValue: 'user 2'},
    {value: '4', viewValue: 'user 3'},
  ];

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
  isLoading:Boolean = true;
  
  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private _fuseConfirmationService:FuseConfirmationService, private taskService:TasksMockApi) { }

  ngOnInit() {
    this.getTaskList();
    this.username.setValue(this.users[0].value)
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private getTaskList(): void {
    // let tasksList = TASK_ITEMS;
    this.taskService.getTaskList({}).pipe(takeUntil(this.destroyer$))
    .subscribe(taskResponse => {
      const tasksList = taskResponse;
      Object.keys(tasksList).forEach(element => {
        this.taskListArr.map((data, index) => {
          if(data.dataType === element) {
            this.taskListArr[index].text = tasksList[element].length?tasksList[element].sort((a,b) =>  (a.priority > b.priority ? 1 : -1)):null;
            this.isLoading = false;
          }
        });
      });
    });
  }

  shuffle(obj, i, ind) {
    this.taskListArr[i].text.splice(ind, 1)
    this.taskListArr[i].text.push(obj)
  }

  transform(index: number) {
    return `translateY(${(index + 1) * 100}%)`;
  }

  public markCompleted(item, ind, itemIndex) {
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : !item.completed?`Mark <b>${item.text}</b> as completed ?`: `Mark <b>${item.text}</b> as uncompleted?`,
      dismissible: true,
      actions:{
        cancel:{
          label:'No'
        },
        confirm :{
          label: 'Yes',
          color: 'warn'
        }
      }
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyer$))
    .subscribe(result => {
      if(result === 'confirmed') {
        if(!item.completed) {
          this.moveCompleted(item, ind,itemIndex);
        } else {
          item.completed = false;
          // item.priority = 'high';
          this.taskListArr[ind].text.splice(itemIndex, 1)
        }
      }
    });
  }


  private moveCompleted(item, ind,itemIndex) {
    item.completed = true;
    // item.priority = 'low';
    // this.taskListArr[ind].text = this.taskListArr[ind].text.concat(this.taskListArr[ind].text.splice(itemIndex, 1));
    this.taskListArr[ind].text.push(item)
  }

  // private moveCompleted(id, ind,element) {
  //   // this.taskListArr[ind].text.forEach(element => {
  //   //   if(element.id === id) {
  //       element.completed = true;
  //       // element.priority = 'low';
  //       let index = this.taskListArr[ind].text.findIndex((item) =>item.id == id);
  //       // this.taskListArr[ind].text.splice(index, 1)
  //       this.taskListArr[ind].text.push(element)
  //   //   }
  //   // });
  // }
  


  // toggleCompleted(task:TaskItem): void {
  //   // task.completed = !task.completed;
  //   if(!task.completed) {
  //     task.completed = true;
  //     this.max = this.max+1;
  //     this.userService.setUsersStatus(task);
  //   }
  // }

}
