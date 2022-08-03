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
  totalCount1:number;
  totalCount2:number;
  public paginationConfig = {
    limit: 10,
    offset_acct: 10,
    offset_mgmt:0,
    offset_eoy:0,
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
    this.reportService.getClientNumber(params).pipe(takeUntil(this.destroyer$)).subscribe(listResponse => {
      this.accountantList = listResponse['accountant'];
      this.endofyearList = listResponse['eoy_accountant'];
      this.managementList = listResponse['mgmt_accountant'];
      this.totalCount = listResponse['total_accountant'];
      this.totalCount1 = listResponse['total_mgmt_accountant'];
      this.totalCount2 = listResponse['total_eoy_accountant'];
      this.cd.detectChanges();
    });
  }

  public onPageChange(event): void {
    delete event.offset
   const params = { ...this.paginationConfig, ...event}
   this.reportService.getClientNumber(params).subscribe(response =>{
    this.managementList = response['mgmt_accountant'];
    this.totalCount1 = response['total_mgmt_accountant'];
   })
  }
}