
import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, GridApi, GridReadyEvent } from 'ag-grid-community';
import { JobManager, TableTheme, TablePageSize, JobAssignee } from 'app/mock-api/apps/reports/report-data';
import { CustomTooltip } from 'app/modules/admin/ag-grid-job-manager/custom-tooltip-component';
import moment from 'moment';
import { AgGridServiceService } from './ag-grid-service.service';

@Component({
  selector: 'app-ag-grid-job-manager',
  templateUrl: './ag-grid-job-manager.component.html',
  styleUrls: ['./ag-grid-job-manager.component.scss']
})
export class AgGridJobManagerComponent implements OnInit {
  private gridApi!: GridApi<JobManager>;
  filteredJobAssigne: Array<JobAssignee> = []
  jobManagerList: Array<JobManager> = [];
  public gridOptions: GridOptions;
  public tooltipShowDelay = 0;
  public tooltipHideDelay = 2000;
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    enableValue: true,
    // rowClassRules:true,
    // enableRowGroup: true,
    // rowGroup: true,
    tooltipComponent: CustomTooltip,
  };

  public rowSelection: 'single' | 'multiple' = 'multiple';
  public rowData = [{}];
  public rowGroupPanelShow = 'always';
  public pivotPanelShow = 'always';
  public themesList: TableTheme[] = [];
  public pageSizeList: TablePageSize[] = [];
  public columnDefs: ColDef[];
  public userTerm: string;
  public selectTheme: string;
  public selected: any;
  public pageSize = 50;
  public blockSize = 100;
  public profileData: any;
  public user_id: any;
  public profile;
  rowClassRules: { 'row-fail': (params: any) => boolean; };
  constructor(private agGridService: AgGridServiceService) {
  }

  ngOnInit(): void {
    this.profileData = localStorage.getItem('loginUser');
    this.profile = JSON.parse(this.profileData);
    let user_id = this.profile.user_id;
    if (user_id) {
      const params = { flt_job_asg: user_id };
      this.getJobMangerList(params);
    } else {
    this.getJobMangerList({});
    }

    // this.rowClassRules = {
    //   'row-fail': function (params) {
    //     const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    //     // const MtA_DeadlineDateFormated= formatDate(new Date(MtA_DeadlineDate), 'dd-MM-yyyy', 'en-US')

    //     var MtA_DeadlineDate = moment(params.data.mta_deadline).format('yyyy-MM-dd')
    //     var period_end = params.data.period_end;
    //     var statutory_deadline = params.data.statutory_deadline;
    //     var date: boolean = false;
    //     if ((MtA_DeadlineDate != '-' && MtA_DeadlineDate != '') && (period_end != '-' && period_end != '') && (statutory_deadline != '-' && statutory_deadline != '')) {
    //       if (currentDate > MtA_DeadlineDate) {
    //         date = true;
    //       }
    //       if (currentDate > period_end) {
    //         date = true;
    //       }
    //       if (currentDate > statutory_deadline) {
    //         date = true;
    //       }
    //     }
    //     // if (period_end != '-' && period_end != '') {
    //     //   if (currentDate > period_end) {
    //     //     date = true;
    //     //   }
    //     // }
    //     // if (statutory_deadline != '-' && statutory_deadline != '') {
    //     //   if (currentDate > statutory_deadline) {
    //     //     date = true;
    //     //   }
    //     // }
    //     //main case
    //     if (date == true) {

    //       return true;
    //     }
    //     else {
    //       return false;
    //     }

    //   },


    // };
    this.getJobAssignee();
    this.columnDefs = this.agGridService.columnDefs;
    this.themesList = this.agGridService.themes();
    this.pageSizeList = this.agGridService.pageSize();
    this.agGridService.getAfterCurrentTaskUpdatedRow().subscribe(data => {
      this.updateRow(data);
    })
  }
  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }

  onBtExport() {
    this.gridApi.exportDataAsExcel();
  }

  onGridReady(params: GridReadyEvent<JobManager>) {
    this.gridApi = params.api;
  }

  getJobMangerList(additionalParams) {
    let params = {
      sort_by: "mta_deadline",
      sort_order: "asc",

    }
    if (additionalParams && additionalParams.flt_job_asg) {
      params['flt_job_asg'] = additionalParams.flt_job_asg;
    }
    this.agGridService.getJobManagerData(params).subscribe(response => {
      this.rowData = response['rows']
      if (response['rows'].length) {
        let data = response['rows']
      }

    }, error => { });
  }

  onCellEditingStopped(event) {
    if (event.type == "cellEditingStopped") {
      let param = {
        job_id: event.data.job_id,
        notes: event.newValue
      }
      this.agGridService.updateJobManagerNote(param).subscribe(response => {
        if (response.message = 'success') {
        }
      }, error => { })
    }
  }

  public onThemeChange(event) {
    const themeValue = document.getElementById('ag-grid')
    themeValue.classList.remove(themeValue.classList.value);
    themeValue.classList.add(event.value);
  }

  public getJobAssignee() {
    this.agGridService.getJobAssignee({}).subscribe(response => {
      this.filteredJobAssigne = response['rows']
    });
  }

  public onClientChange(event) {
    const params = { flt_job_asg: event.value }
    this.getJobMangerList(params);

  }

  onPageSizeChanged(event: any): void {
    this.pageSize = Number(event.currentTarget.value);
    this.gridApi.paginationSetPageSize(this.pageSize);
  }

  remove() {
    this.profile = '';
    this.getJobMangerList({});
  }

  updateRow(data) {
    let jobId = data.data['job_id'];
    this.gridApi.forEachNode((rowNode, index) => {
      let job_Id = rowNode.data['job_id'];
      if (job_Id === jobId) {
        rowNode.setData(data.data);
      }
    });
  }
}





