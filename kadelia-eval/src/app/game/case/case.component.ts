import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {

  @Input() public color: string;

  @Output() colorChange = new EventEmitter();

  constructor() { }

  public requestColor(): void {
    this.color = prompt("insert color");
    this.colorChange.emit(this.color);
  }
  
}
