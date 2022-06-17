import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assessment-status',
  templateUrl: './assessment-status.component.html',
  styleUrls: ['./assessment-status.component.scss']
})
export class AssessmentStatusComponent implements OnInit {

  constructor(public readonly dialogRef: MatDialogRef<AssessmentStatusComponent>) { }

  ngOnInit(): void {
  }

}
