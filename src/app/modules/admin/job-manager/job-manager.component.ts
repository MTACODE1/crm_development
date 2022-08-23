import { Params } from "@angular/router";
import { TableUtil } from "./../example/TableUtil";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { PeriodicElement } from "app/mock-api/apps/reports/report-data";
import { ReportsService } from "app/mock-api/apps/reports/reports.service";
import { jobType } from "app/mock-api/apps/tasks/data";
import { PaginatorComponent } from "app/shared/pagination/paginator/paginator.component";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-job-manager",
  templateUrl: "./job-manager.component.html",
  styleUrls: ["./job-manager.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class JobManagerComponent implements OnInit {
  @ViewChild(PaginatorComponent, { static: false })
  paginatorComponent: PaginatorComponent;
  totalLogCount: number;
  displayedColumns: string[] = [
    "job_type",
    "client_name",
    "logo",
    "period_end",
    "mta_deadline",
    "statutory_deadline",
    "job_stage",
    "current_task",
    "client_manager",
    "job_assignee",
    "notes",
  ];
  userTerm: string;
  public ProcessTypeEnum = jobType;

  public jobManagerList: PeriodicElement[] = [];

  public paginationConfig = {
    limit: 10,
    offset: 0,
  };
  public filterParams = {
    limit: this.paginationConfig.limit,
    offset: this.paginationConfig.offset,
    sort_by: null,
    sort_order: null,
    flt_job_asg: null,
    flt_job_type: null,
  };
  flt_job_type: string;
  flt_client_manager: string;
  flt_job_asg: string;
  statutory_deadline: boolean;

  filterList = [
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ];
  private readonly destroyer$: Subject<void> = new Subject();

  jobTypesList = [];

  constructor(private reportService: ReportsService) {}

  ngOnInit(): void {
    this.getjobTypes();
    this.getJobMangerList(this.filterParams);
  }

  getjobTypes() {
    this.jobTypesList = this.reportService.getJobTypes();
  }

  private getJobMangerList(params): void {
    (params.limit = this.paginationConfig.limit),
      (params.offset = this.paginationConfig.offset),
      this.reportService
        .getJobManagerData(params)
        .pipe(takeUntil(this.destroyer$))
        .subscribe((response) => {
          this.jobManagerList = response["rows"];
          this.totalLogCount = response["total_count"];
        });
  }
  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }
  public onPageChange(event): void {
    this.paginationConfig = {
      ...this.paginationConfig,
      ...event,
      user: this.userTerm,
    };
    this.getJobMangerList(this.filterParams);
  }

  exportTable() {
    TableUtil.exportTableToExcel("jobMangerTable", "Job Manager Table");
  }

  toggleStatutoryDeadline(event) {
    this.filterParams.sort_by = event ? "statutory_deadline" : null;
    this.getJobMangerList(this.filterParams);
  }

  onJobTypeChange(event) {
    let value = event.value.value;
    this.filterParams.flt_job_type = value;
    this.getJobMangerList(this.filterParams);
    this.filterList.forEach((element) => {
      if (element.id == 1) element.value = event.value.name;
    });
  }

  removeFliter(item) {
    if (item.id == 1) {
      this.filterList[0].value = "";
      this.flt_job_type = null;
      this.filterParams.flt_job_type = null;
    }
    this.getJobMangerList(this.filterParams);
  }
}
