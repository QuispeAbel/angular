import { Component } from '@angular/core';
import { MostrarModalService } from './services/mostrar-modal.service';
import { Observable, Subscription } from 'rxjs';
import { Tarea } from './models/tarea.model';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
}
