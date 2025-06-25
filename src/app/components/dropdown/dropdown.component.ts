import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formOptions } from 'src/app/config/options';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];
  @Input() estado?: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  //public estado : string = '';

  public open: boolean = false;

  public toggleDropdown() {
    this.open = !this.open;
  }

  public selectOption(option: any) {
    this.onSelect.emit(option);
    this.open = false;
  }

  mostrar(){
    console.log("estado en DD"+this.estado)
    this.onSelect.emit(this.estado);
  }
}
