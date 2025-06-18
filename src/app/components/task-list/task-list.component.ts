import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  componentes : Tarea[] = [
    {titulo:"Hacer tarea",subtitle:"En casa", descripcion:"hacer tarea de math"},
    {titulo:"Hacer bolso",subtitle:"para un viaje", descripcion:"Meter toda la ropa en la valija"},
    {titulo:"Salir a correr",subtitle:"Por la avenida", descripcion:"Hacer 5km por la aventida trotando"},
  ]


}
