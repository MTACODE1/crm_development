import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  vatClient:any;
  constructor(@Inject(MAT_DIALOG_DATA) public readonly data,
    public readonly dialogRef: MatDialogRef<ViewDetailsComponent>) { }

  ngOnInit(): void {
  }
}
