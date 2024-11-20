import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    // Handle form data, update state, etc.
    console.log('Form submitted!');
  }
}
