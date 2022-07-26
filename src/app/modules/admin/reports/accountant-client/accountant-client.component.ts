import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportData } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { Subject, takeUntil } from 'rxjs';

const MANAGEMENT_DATA: ReportData[] = [
  { user: 'Akkil', live: '80', suspended: '5', total: '85', },
  { user: 'Ethisham', live: '50', suspended: '2', total: '48' },
];

@Component({
  selector: 'app-accountant-client',
  templateUrl: './accountant-client.component.html',
  styleUrls: ['./accountant-client.component.scss']
})
export class AccountantClientComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['accountant', 'live', 'suspended', 'total'];
  managementColumns: string[] = ['management', 'mlive', 'msuspended', 'mtotal'];
  endofyearColumns: string[] = ['eaccountant', 'elive', 'esuspended', 'etotal'];

  managementData = MANAGEMENT_DATA;
  accountantList: ReportData[] = [];
  endofyearList: ReportData[] = [];

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.clientList();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private clientList(): void {
    this.reportService.getClientNumber({}).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.accountantList = listResponse['accountant'];
      this.endofyearList = listResponse['eoy_accountant'];
    });
  }

}