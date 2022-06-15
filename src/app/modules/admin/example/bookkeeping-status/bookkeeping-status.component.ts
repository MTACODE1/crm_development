import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bookkeeping-status',
  templateUrl: './bookkeeping-status.component.html',
  styleUrls: ['./bookkeeping-status.component.scss']
})
export class BookkeepingStatusComponent implements OnInit {

  public optionOne = [ ]
  selectedstatus: any;

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, public readonly dialogRef: MatDialogRef<BookkeepingStatusComponent>) 
  { }

  ngOnInit(): void {
    if(this.data === 'setFirst') {
      this.optionOne = [ 
        {name:'Level 1 MR Completed', value:8},//value is index
        {name:'Level 2 MR Completed', value:9},
        {name:'Level 3 MR Completed', value:10},
      ]
    } else {
      this.optionOne = [
        {name:'Level 1 MR Sent to Client', value:11},//value is index
        {name:'Level 2 MR Sent to Client', value:12},
        {name:'Level 3 MR Sent to Client', value:13},
      ]
    }
  }

  public radioChange(item): void {
    this.selectedstatus = item;
  }

  public setStatus(): void {
    this.dialogRef.close({ fetch: this.selectedstatus });
  }
}
