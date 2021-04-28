import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public name = new FormControl();

  public rows = new FormControl('',[
        Validators.min(1),
        Validators.required
      ]);
  public cols = new FormControl('', [
        Validators.min(1),
        Validators.required
      ]);

  constructor() { }

  public ngOnInit(): void {
    this.rows.setValue(3);
    this.cols.setValue(6);
  }

}
