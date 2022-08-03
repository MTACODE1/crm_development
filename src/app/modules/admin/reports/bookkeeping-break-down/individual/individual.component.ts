import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IndividualStage } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import moment from 'moment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book'];

  individualStageList: IndividualStage[] = [];
  date = new FormControl(moment());

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.getIndividualStageList();
  }

  private getIndividualStageList() {
    const params = {
      month: this.date.value.format('MMM-yy'),
    }
    this.reportService.getBreakdownData(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.individualStageList = listResponse['individual_stage'];
    })
  }
}
