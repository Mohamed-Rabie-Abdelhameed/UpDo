import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  createTask(task: Task) {
    const headers = new HttpHeaders();
    this.http
      .post<{ title: string; description: string ; done: boolean; created:Date}>(
        'https://updo-59775-default-rtdb.firebaseio.com/tasks.json',
        task,
        { headers: headers }
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getToDoTasks() {}

  getDoneTasks() {}

  deleteTask(task: Task) {}
}
