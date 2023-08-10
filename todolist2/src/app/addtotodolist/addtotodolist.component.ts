import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectService } from '../services/connect.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addtotodolist',
  templateUrl: './addtotodolist.component.html',
  styleUrls: ['./addtotodolist.component.css']
})
export class AddtotodolistComponent {
  taskForm: FormGroup;
  validation: boolean = false;
  showNotification: boolean = false;

  constructor(private formBuilder: FormBuilder, private connectService: ConnectService) {
    this.taskForm = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
    });

  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.validation = true;
      return;
    }

    const task = this.taskForm.get('task')?.value;
    const date = this.taskForm.get('date')?.value;

    this.connectService.crearTarea(task, date).subscribe((data: any[]) => {
      console.log(data);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 1000);
      this.taskForm.reset();
      this.validation = false;
    });
  }
}
