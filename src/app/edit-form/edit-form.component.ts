import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  constructor(
    private router: Router,
    private api: TasksService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  id: string;
  currentTask: Task;

  ngOnInit() {
    this.populateForm();
  }
  @ViewChild('editForm') editForm: NgForm;

  populateForm() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getTasks().subscribe((tasks) => {
      this.currentTask = tasks.find((task) => {
        return task.id === this.id;
      });
      this.editForm.setValue({
        title: this.currentTask.title,
        description: this.currentTask.description,
      });
    });
  }

  onEditTask() {
    var editedTask = new Task();
    editedTask = {
      title: this.editForm.value.title,
      description: this.editForm.value.description,
      done: this.currentTask.done,
      created: this.currentTask.created,
    };
    this.api.updateTask(this.id, editedTask);
    this.openSnackBar();
  }
  onCancel() {
    this.router.navigate(['/home']);
  }
  openSnackBar() {
    this.snackBar.open('Task edited successfully', 'Close', {
      duration: 3000,
    });
  }
}
