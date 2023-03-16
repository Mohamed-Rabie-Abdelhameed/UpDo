import { Component } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1 loresm fsdkfjshfjlskfhs fsfskfhs fsdfsf sf sdfsdfsdf sdfsdfs', done: false , created: new Date()},
    { id: 2, title: 'Task 2', description: 'Description 2', done: false , created: new Date()},
    { id: 3, title: 'Task 3', description: 'Description 3', done: false , created: new Date()},
    { id: 4, title: 'Task 4', description: 'Description 4', done: false , created: new Date()},
  ]

}
