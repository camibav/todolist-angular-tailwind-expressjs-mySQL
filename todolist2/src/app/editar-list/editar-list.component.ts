import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectService } from '../services/connect.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-list',
  templateUrl: './editar-list.component.html',
  styleUrls: ['./editar-list.component.css']
})
export class EditarListComponent implements OnInit {
  taskForm: FormGroup; // Declara el FormGroup
  validation: boolean = false;
  showNotification: boolean = true;
  idTarea: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private connectService: ConnectService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.taskForm = this.formBuilder.group({
      task: ['', [Validators.required, Validators.minLength(10)]], // FormControl para la tarea (campo requerido)
      date: ['', Validators.required], // FormControl para la fecha (campo requerido)
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idTarea = +params['id'];
      this.cargarDatosDeTarea();
    })

  }
  cargarDatosDeTarea() {
    this.connectService.obtenerUnaTarea(this.idTarea).subscribe((data: any[]) => {
      this.taskForm.patchValue({
        task: data[0].tarea,
        date: data[0].fecha,
      })
    })
  }
  cancelar() {
    this.router.navigate(['/']);
  }


  onSubmit() {
    if (this.taskForm.invalid) {
      this.validation = true;
      return
    }

    const task = this.taskForm.get('task')?.value;
    const date = this.taskForm.get('date')?.value;
    this.connectService.editarTarea(this.idTarea, task, date).subscribe((data: any[]) => {
     console.log(data)
    })
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);



    this.router.navigate(['/']);
    this.taskForm.reset();
    this.validation = false;

  }
}
