import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, public readonly dialogRef: MatDialogRef<OnbordingFormComponent>,
          private readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  statusChanged(event): void {
    console.log(event)
    const snackBarParams: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: 'default-snack-bar',
      data: event
    };
    this.snackBar.openFromComponent(SuccessModalComponent, snackBarParams);
  }

}
