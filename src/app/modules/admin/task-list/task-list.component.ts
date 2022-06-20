import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
