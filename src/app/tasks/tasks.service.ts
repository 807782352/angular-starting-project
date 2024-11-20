import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  getUserTasks(userId: String) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTaskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      ...newTaskData,
      id: new Date().getTime().toString(),
      userId: userId,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
