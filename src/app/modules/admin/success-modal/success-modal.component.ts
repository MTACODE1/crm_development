import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { statusType } from 'app/core/user/user.types';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {

  public PlanTypeEnum = statusType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public readonly data: any,
  private readonly snackBarRef: MatSnackBarRef<SuccessModalComponent>,) { }


  public close(): void {
    this.snackBarRef.dismiss();
  }
  
}
