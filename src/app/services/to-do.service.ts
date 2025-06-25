import { Injectable } from '@angular/core';
import { FilterStatus, Tarea, TareaEstado } from '../models/tarea.model';
import { filterOptions } from '../config/options';
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
    this.setFilter()
    // this.update()
  }
  private todos : Tarea[] = todoDefault
  private sharingObservablePrivate: BehaviorSubject<Tarea[]> = 
      new BehaviorSubject<Tarea[]>(this.todos)

  private observableFilter : BehaviorSubject<FilterStatus> = new BehaviorSubject<FilterStatus>('all')
  
   get sharingObservable(){
    return this.sharingObservablePrivate.asObservable()
  }

  removeTodo(todoId : Tarea['id']){
    this.todos = this.todos.filter( (todo) => todo.id !== todoId)
    this.update()
  }

  setFilter(){
    this.observableFilter.subscribe((status)=>{
      const filterTodos = status === 'all'?
      this.todos:
      this.todos.filter((todo)=>todo.estado == status)

      this.sharingObservablePrivate.next(filterTodos)
    })
  }

  filtrarPorEstado(value : FilterStatus){
    this.observableFilter.next(value)
    // return this.sharingObservablePrivate.asObservable
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
