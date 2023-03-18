import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit{
  constructor(private api: TasksService) {}
  ngOnInit(): void {
    this.fetchTasks();
  }
  tasks : Task[] = [];
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
}
