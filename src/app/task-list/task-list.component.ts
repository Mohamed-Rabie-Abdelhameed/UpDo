import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private api: TasksService, private router:Router) {}
  ngOnInit(): void {
    this.fetchTasks();
  }
  tasks: Task[] = [];
  fetchTasks() {
    this.api.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  onDeleteTask(id: string) {
    this.api.deleteTask(id).subscribe(() => {
      this.fetchTasks();
    });
  }
  onMarkDone(id: string) {
    this.api.toggleDone(id, true).subscribe(() => {
      this.fetchTasks();
      location.reload();
    });
  }
  onEditTask(id: string) {
    this.router.navigate(['/edit', id]);
  }
}
