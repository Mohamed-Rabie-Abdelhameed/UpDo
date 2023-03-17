import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  constructor(private router: Router, private http: HttpClient, private api: TasksService) {}

  onAddTask(task: { title: string; description: string }) {
    console.log(task);
    // this.http.post(
    //   'https://updo-59775-default-rtdb.firebaseio.com/tasks.json',
    //   task
    // ).subscribe((responseData) => {
    //   console.log(responseData);
    // });
    var newTask = new Task();
    newTask = {id: 1,title: task.title, description: task.description, done: false, created: new Date()}
    console.log(newTask);
    // newTask.title = task.title;
    // newTask.description = task.description;
    // newTask.done = false;
    // newTask.created = new Date();
    this.api.createTask(newTask);
    this.router.navigate(['/home']);
  }
  onCancel() {
    console.log('cancel');
    this.router.navigate(['/home']);
  }
}
