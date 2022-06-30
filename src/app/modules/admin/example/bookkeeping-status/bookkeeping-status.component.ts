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
        {task:'Level 1 MR Completed', static_id:8},//static_id is index
        {task:'Level 2 MR Completed', static_id:9},
        {task:'Level 3 MR Completed', static_id:10},
      ]
    } else {
      this.optionOne = [
        {task:'Level 1 MR Sent to Client', static_id:11},//static_id is index
        {task:'Level 2 MR Sent to Client', static_id:12},
        {task:'Level 3 MR Sent to Client', static_id:13},
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
