import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PeriodicElement } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { jobType } from 'app/mock-api/apps/tasks/data';
import { PaginatorComponent } from 'app/shared/pagination/paginator/paginator.component';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-job-manager',
  templateUrl: './job-manager.component.html',
  styleUrls: ['./job-manager.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobManagerComponent implements OnInit {
  @ViewChild(PaginatorComponent , {static:false}) paginatorComponent:PaginatorComponent;
  totalLogCount: number;
  displayedColumns: string[] = ['job_type', 'client_name','logo', 'period_end', 'mta_deadline', 'statutory_deadline', 'job_stage','current_task', 'client_manager', 'job_assignee', 'notes'];
  userTerm: string;
  public ProcessTypeEnum = jobType;
  
  public jobManagerList: PeriodicElement[] = [];

  public paginationConfig = {
    limit: 10,
    offset: 0,
    // page:1
    
  }
  private readonly destroyer$: Subject<void> = new Subject();

  constructor( private reportService:ReportsService) { }

  ngOnInit(): void {
    this.getJobMangerList();
  }
  private getJobMangerList(): void {
    const params = {
      limit: this.paginationConfig.limit,
      offset: this.paginationConfig.offset,
      // page: this.paginationConfig.page,
      
    }
    this.reportService.getJobManagerData(params).pipe(takeUntil(this.destroyer$)).subscribe(response => {
   this.jobManagerList = response['rows'];
   this.totalLogCount = response['total_count'];
    });
  }
  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }
  public onPageChange(event): void {
    const params = {
      ...this.paginationConfig,
      ...event,
      user: this.userTerm,
    }
    // this.reportService.getJobManagerData(params).subscribe(response => {
    //   this.jobManagerList = response['rows'];
    // });
    this.getJobMangerList();
  }

}

