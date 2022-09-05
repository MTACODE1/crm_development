import { AgGridServiceService } from './../ag-grid-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-report',
  templateUrl: './level-report.component.html',
  styleUrls: ['./level-report.component.scss']
})
export class LevelReportComponent implements OnInit {
  public optionOne = [];
  public sendParams: any;
  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, 
  public readonly dialogRef: MatDialogRef<LevelReportComponent>,public agGridService: AgGridServiceService) {
    console.log(data);
  }

  ngOnInit(): void {
    this.optionOne = [
      { task: 'Level 1 MR Completed', p_status: 8 },//static_id is index
      { task: 'Level 2 MR Completed', p_status: 9 },
      { task: 'Level 3 MR Completed', p_status: 10 },
    ];
  }
  radioChange(section) {
    let pStatus;
    if (section.p_status == 8) {
      pStatus = 11;

    } else if (section.p_status == 9) {
      pStatus = 12;

    } else if (section.p_status == 10) {
      pStatus = 13;
    }
    this.sendParams = {
      job_id: this.data.params.job_id,
      p_status: pStatus
    }
  }
  setStatus() {


    this.agGridService.updateJobmanagerStatus(this.sendParams).subscribe(response => {
      if (response.message == 'success') {
        this.agGridService.setAfterCurrentTaskUpdatedRow(this.data['rowIndex'], response['job']);
        this.dialogRef.close();
      }
    }, error => { });
  }



}
