import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { BehaviorSubject } from 'rxjs';

const todoDefault : Tarea[] = [
      {id: 0,titulo:"Hacer tarea1",fechaCreacion:new Date(), descripcion:"hacer tarea de math", estado: 'pendiente'},
      {id: 2,titulo:"Hacer tarea2",fechaCreacion:new Date(), descripcion:"hacer tarea de X", estado: 'en progreso'},
      {id: 3,titulo:"Hacer tarea3",fechaCreacion:new Date(), descripcion:"hacer tarea de Y", estado: 'completada'},
      {id: 4,titulo:"Hacer tarea4",fechaCreacion:new Date(), descripcion:"hacer tarea de math", estado: 'pendiente'},
      {id: 5,titulo:"Hacer tarea5",fechaCreacion:new Date(), descripcion:"hacer tarea de X", estado: 'en progreso'},
      {id: 6,titulo:"Hacer tarea6",fechaCreacion:new Date(), descripcion:"hacer tarea de Y", estado: 'completada'},
    ]

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  constructor() { 
    this.loadLocalStorage()
    this.update()
  }
  private todos : Tarea[] = todoDefault
  private sharingObservablePrivate: BehaviorSubject<Tarea[]> = 
      new BehaviorSubject<Tarea[]>(this.todos)

   get sharingObservable(){
    return this.sharingObservablePrivate.asObservable()
  }

  removeTodo(todoId : Tarea['id']){
    this.todos = this.todos.filter( (todo) => todo.id !== todoId)
    this.update()
  }

  addTodo(newTarea : Tarea){
    this.todos.push(newTarea)
    this.update()
  }

  editTodo(todoId : Tarea['id']){

  }

  private loadLocalStorage(){
    const storedTodos = localStorage.getItem('todos')

    if(storedTodos){
      this.todos = JSON.parse(storedTodos) 
    }
  }

  private update(){
    this.sharingObservablePrivate.next(this.todos)
    this.uptdateLocalStorage()
    console.log(this.todos)
  }

  private uptdateLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
