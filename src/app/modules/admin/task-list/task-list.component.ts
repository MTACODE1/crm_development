import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { statusDataType, TaskListItems, TASK_ITEMS } from './task-items';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger("myTrigger", [
      state(
        "fadeInFlash",
        style({
          opacity: "1"
        })
      ),
      transition("void => *", [
        style({ opacity: "0", transform: "translateY(20px)" }),
        animate("500ms")
      ])
    ])
  ]
})

export class TaskListComponent implements OnInit {
  username = new FormControl();
  public users = [
    {value: '1', viewValue: 'All Users'},
    {value: '2', viewValue: 'user 1'},
    {value: '3', viewValue: 'user 2'},
    {value: '4', viewValue: 'user 3'},
  ];

  public medicalAreaArr: TaskListItems[] = [
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
  
  constructor(private _fuseConfirmationService:FuseConfirmationService) { }

  ngOnInit() {
    this.getTaskList();
    this.username.setValue(this.users[0].value)
  }

  private getTaskList(): void {
    let tasksList = TASK_ITEMS;
    Object.keys(tasksList).forEach(element => {
      this.medicalAreaArr.map((data, index) => {
        if(data.dataType === element) {
          this.medicalAreaArr[index].text = tasksList[element].length?tasksList[element].sort((a,b) =>  (a.priority > b.priority ? 1 : -1)):null
        }
      });
    });
  }

  shuffle(obj, i, ind) {
    this.medicalAreaArr[i].text.splice(ind, 1)
    this.medicalAreaArr[i].text.push(obj)
  }

  transform(index: number) {
    return `translateY(${(index + 1) * 100}%)`;
  }

  public markCompleted(item, ind, itemIndex) {
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : !item.completed?'Do you want to make this task completed ?': 'Do you want to move this task from completed to uncompleted?',
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
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirmed') {
        if(!item.completed) {
          this.moveCompleted(item, ind,itemIndex);
        } else {
          item.completed = false;
          // item.priority = 'high';
          this.medicalAreaArr[ind].text.splice(itemIndex, 1)
        }
      }
    });
  }


  private moveCompleted(item, ind,itemIndex) {
    item.completed = true;
    // item.priority = 'low';
    // this.medicalAreaArr[ind].text = this.medicalAreaArr[ind].text.concat(this.medicalAreaArr[ind].text.splice(itemIndex, 1));
    this.medicalAreaArr[ind].text.push(item)
  }

  // private moveCompleted(id, ind,element) {
  //   // this.medicalAreaArr[ind].text.forEach(element => {
  //   //   if(element.id === id) {
  //       element.completed = true;
  //       // element.priority = 'low';
  //       let index = this.medicalAreaArr[ind].text.findIndex((item) =>item.id == id);
  //       // this.medicalAreaArr[ind].text.splice(index, 1)
  //       this.medicalAreaArr[ind].text.push(element)
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
