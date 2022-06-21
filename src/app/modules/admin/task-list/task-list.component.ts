import { Component, OnInit } from '@angular/core';
import { statusDataType, TaskListItems, TASK_ITEMS } from './task-items';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit() {
    this.getTaskList();
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

  public markCompleted(id:number,ind) {
    let data;
   this.medicalAreaArr.map(item => {
    data =  item.text.find((ele) =>ele.id == id)
    });
    this.medicalAreaArr[ind].text.forEach(element => {
      if(element.id === id) {
        element.completed = !element.completed;
        // element.priority = 'low';
      }
    });
  }


  // toggleCompleted(task:TaskItem): void {
  //   // task.completed = !task.completed;
  //   if(!task.completed) {
  //     task.completed = true;
  //     this.max = this.max+1;
  //     this.userService.setUsersStatus(task);
  //   }
  // }


}
