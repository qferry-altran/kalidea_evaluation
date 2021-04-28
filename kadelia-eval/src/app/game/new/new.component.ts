import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent implements OnInit {

  public table: string[][];

  public name = new FormControl();

  public rows = new FormControl('',[
        Validators.min(1),
        Validators.required
      ]);
  public cols = new FormControl('', [
        Validators.min(1),
        Validators.required
      ]);

  private startRows = 3;

  private startCols = 6;
  
  constructor(private changeDetection: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.rows.setValue(this.startRows);
    this.cols.setValue(this.startCols);

    this.resetTable();
  }

  public drawGrid(): void {
    if (this.rows.value < 1) {
      this.rows.setValue(1);
    }

    if (this.cols.value < 1) {
      this.cols.setValue(1);
    }

    this.changeTable();
  }

  private resetTable(): void {
    this.table = [];

    for(let i = 0; i < this.rows.value; i++) {
      this.table.push([]);
      for (let j = 0; j < this.cols.value; j++) {
        this.table[i].push('');
      }
    }

    this.changeDetection.detectChanges();
  }

  private changeTable(): void {
    const previousTable = this.table;
    this.table = [];

    for(let i = 0; i < this.rows.value; i++) {
      this.table.push([]);
      for (let j = 0; j < this.cols.value; j++) {
        if (!previousTable[i] || !previousTable[i][j]) {
          this.table[i].push('');
        } else {
          this.table[i].push(previousTable[i][j]);
        }
      }
    }

    this.changeDetection.detectChanges();
  }
}
