import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  public selectOption(option: any) {
    this.onSelect.emit(option);
  }

  mostrar(){
    this.onSelect.emit(this.estado);
  }
}
