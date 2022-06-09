import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public readonly data: any,
  private readonly snackBarRef: MatSnackBarRef<SuccessModalComponent>,) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.snackBarRef.dismiss();
  }
  
}
