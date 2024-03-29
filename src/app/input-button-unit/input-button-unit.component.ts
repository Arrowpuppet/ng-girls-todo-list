import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  template: `
    <p>
    </p>
    
    <input #inputElementRef (keyup.enter)="changeTitle(getInputValue($event))">
  <button (click)="changeTitle(inputElementRef.value)">
  Save
</button>
  `,
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Hello World';
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
