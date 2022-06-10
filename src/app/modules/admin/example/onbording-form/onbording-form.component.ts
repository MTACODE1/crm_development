import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, 
    public readonly dialogRef: MatDialogRef<OnbordingFormComponent>) 
    { }

  ngOnInit(): void {
  }

  statusChanged(event): void {
    console.log(event)
    
  }

}
