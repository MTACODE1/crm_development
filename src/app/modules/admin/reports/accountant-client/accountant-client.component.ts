import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ReportData } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-accountant-client',
  templateUrl: './accountant-client.component.html',
  styleUrls: ['./accountant-client.component.scss']
})
export class AccountantClientComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['accountant', 'live', 'suspended', 'total'];
  managementColumns: string[] = ['management', 'mlive', 'msuspended', 'mtotal'];
  endofyearColumns: string[] = ['eaccountant', 'elive', 'esuspended', 'etotal'];

  managementList: ReportData[] = [];
  accountantList: ReportData[] = [];
  endofyearList: ReportData[] = [];

  totalCount:number;
  public paginationConfig = {
    limit: 10,
    offset: 0,
  }

  private readonly destroyer$: Subject<void> = new Subject();

  constructor(private reportService: ReportsService, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.clientList();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  private clientList(): void {
    const params ={
      ...this.paginationConfig
    }
    console.log(params)
    this.reportService.getClientNumber(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.accountantList = listResponse['accountant'];
      this.endofyearList = listResponse['eoy_accountant'];
      this.managementList = listResponse['mgmt_accountant'];
      this.totalCount = this.accountantList.length;
      console.log(this.totalCount)
      this.cd.detectChanges();
    });
  }

  public onPageChange(event): void {
   this.paginationConfig = { ...this.paginationConfig, ...event}
   console.log(this.paginationConfig);
   this.clientList();
  }
}