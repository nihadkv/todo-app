import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  formGroup!: FormGroup;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      task: [],
    });
  }
}
