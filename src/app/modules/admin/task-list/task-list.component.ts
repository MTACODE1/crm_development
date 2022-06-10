import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ONBOARDING_TASK_ITEMS, TaskItem } from './task-items';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: TaskItem[];
  drawerMode: 'side' | 'over';
  tasksCount: any = {
    completed : 0,
    incomplete: 0,
    total     : 0
};
  max = 2;
  constructor(private readonly ref:ChangeDetectorRef, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadOnboardingTasks();
  }

  private loadOnboardingTasks(): void {
    this.tasks = ONBOARDING_TASK_ITEMS.map(item => {
      return item;
    });
    this.tasksCount.total = this.tasks.filter(task => task.type === 'task').length;
    this.tasksCount.completed = this.tasks.filter(task => task.type === 'task' && task.completed).length;
    this.tasksCount.incomplete = this.tasksCount.total - this.tasksCount.completed;
  }

  toggleCompleted(task:TaskItem): void {
    // task.completed = !task.completed;
    if(!task.completed) {
      task.completed = true;
      this.max = this.max+1;
    }
  }

  onBackdropClicked(): void {
    this.router.navigate(['./'], {relativeTo: this.route});
    this.ref.markForCheck();
  }

  public trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  public createTask(type: 'task' | 'section') {

  }

  dropped(event: CdkDragDrop<Task[]>): void {
      // Move the item in the array
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

  }

}
