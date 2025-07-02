import { Component } from '@angular/core';
import { filterOptions, formOptions } from 'src/app/config/options';
import { FilterStatus, TareaEstado } from 'src/app/models/tarea.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public filterOptions = filterOptions

  constructor(private _filter : ToDoService){

  }

  filtrar(value : FilterStatus){
    this._filter.filtrarPorEstado(value)
  }
}
