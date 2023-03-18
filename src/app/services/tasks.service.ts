import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  createTask(task: Task) {
    const headers = new HttpHeaders();
    this.http
      .post<{
        title: string;
        description: string;
        done: boolean;
        created: Date;
      }>('https://updo-59775-default-rtdb.firebaseio.com/tasks.json', task, {
        headers: headers,
      })
      .subscribe();
  }

  getTasks() {
    return this.http
      .get<{ [key: string]: Task }>(
        'https://updo-59775-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        map((responseData) => {
          const tasks = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              tasks.push({ ...responseData[key], id: key });
            }
          }
          return tasks;
        })
      );
  }

  deleteTask(id: string) {
    return this.http.delete(
      'https://updo-59775-default-rtdb.firebaseio.com/tasks/' + id + '.json'
    );
  }

  updateTask(id: string, task: Task) {
    return this.http.patch(
      'https://updo-59775-default-rtdb.firebaseio.com/tasks/' + id + '.json',
      task
    ).subscribe();
  }

  markDone(id: string) {
    return this.http.patch(
      'https://updo-59775-default-rtdb.firebaseio.com/tasks/' + id + '.json',
      { done: true }
    );
  }

}
