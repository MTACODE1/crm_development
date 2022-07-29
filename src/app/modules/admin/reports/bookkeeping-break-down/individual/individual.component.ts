import { Component, OnInit } from '@angular/core';
import { IndividualStage } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  displayedColumns: string[] = ['accountant', 'filed', 'sentClient', 'review', 'sentAccountant', 'book'];

  individualStageList: IndividualStage[] = [];

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.getIndividualStageList();
  }

  private getIndividualStageList() {
    this.reportService.getBreakdownData({}).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.individualStageList = listResponse['individual_stage'];
    })
  }
}
