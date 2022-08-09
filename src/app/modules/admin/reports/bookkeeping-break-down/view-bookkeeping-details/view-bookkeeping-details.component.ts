import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bookkeeping-details',
  templateUrl: './view-bookkeeping-details.component.html',
  styleUrls: ['./view-bookkeeping-details.component.scss']
})
export class ViewBookkeepingDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public readonly dialogRef: MatDialogRef<ViewBookkeepingDetailsComponent>) { }

  ngOnInit(): void {
  }
}
