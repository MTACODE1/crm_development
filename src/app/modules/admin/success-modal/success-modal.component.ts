import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { statusType, User } from 'app/core/user/user.types';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {
  user: User;
  public PlanTypeEnum = statusType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public readonly data: any,
    private readonly snackBarRef: MatSnackBarRef<SuccessModalComponent>,) { }


  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loginUser'));
  }

  public close(): void {
    this.snackBarRef.dismiss();
  }

}
