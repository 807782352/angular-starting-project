import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId = 'u1'; // initialize

  get selectedUser() {
    // ! means I can pretty sure we can get a value in this process
    return this.users.find((user) => this.selectedUserId === user.id)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
