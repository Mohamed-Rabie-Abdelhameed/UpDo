import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  constructor(
    private router: Router,
    private api: TasksService,
    private snackBar: MatSnackBar
  ) {}

  @ViewChild('addForm') addForm: NgForm;

  onAddTask(task: { title: string; description: string }) {
    var newTask = new Task();
    newTask = {
      title: task.title,
      description: task.description,
      done: false,
      created: new Date(),
    };
    this.api.createTask(newTask);
    this.openSnackBar();
    this.addForm.reset();
  }
  onCancel() {
    this.router.navigate(['/home']);
  }
  openSnackBar() {
    this.snackBar.open('Task added successfully', 'Close', {
      duration: 3000,
    });
  }
}
