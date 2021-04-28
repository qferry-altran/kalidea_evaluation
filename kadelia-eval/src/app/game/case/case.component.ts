import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent {

  @Input() public color: string;

  constructor() { }

  public requestColor(): void {
    this.color = prompt("insert color");
  }

}
