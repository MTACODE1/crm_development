import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, GridOptions,GridApi, GridReadyEvent, PaginationNumberFormatterParams } from 'ag-grid-community';
import { PeriodicElement } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { CustomTooltip } from 'app/modules/admin/ag-grid-job-manager/custom-tooltip-component';
// import 'ag-grid-enterprise';
@Component({
  selector: 'app-ag-grid-job-manager',
  templateUrl: './ag-grid-job-manager.component.html',
  styleUrls: ['./ag-grid-job-manager.component.scss']
})
export class AgGridJobManagerComponent implements OnInit {
  private gridApi!: GridApi<PeriodicElement>;
  gridOptions: GridOptions;
  public jobManagerList: PeriodicElement[] = [];
  public tooltipShowDelay = 0;
  public tooltipHideDelay = 2000;
  totalLogCount: number;
  userlist:[]
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    tooltipComponent: CustomTooltip,
  };
  public columnDefs: ColDef[] = [
    { headerName:'Job Type',field:'job_type',   floatingFilter: true,tooltipField: 'job_type',width: 120,
    tooltipComponentParams: { color: '#ececec' }, filter:'agTextColumnFilter'},
    { headerName:'Client Name',field:'client_name',filter: 'agTextColumnFilter',width: 200,},
    { headerName:'',field: 'Image',floatingFilter:false,filter:false, sortable: false,cellRenderer: ColourCellRenderer ,width: 160,},
    { headerName:'Period End',field:'period_end',filter:'agTextColumnFilter',width: 120,},
    { headerName:'MTA Deadline',field:'mta_deadline',filter:'agTextColumnFilter',width: 200,},
    { headerName:'Statutory Date',field:'statutory_deadline',   filter: 'agDateColumnFilter',width: 200, filterParams:{
    
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          var dateAsString = cellValue;
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split('/');
          var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );
          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true,
        minValidYear: 2000,
        maxValidYear: 2023,
        inRangeFloatingFilterDateFormat: 'MM DD YYYY',  
    },
  },
    { headerName:'Job Stage',field:'job_stage',filter: 'agTextColumnFilter', },
    { headerName:'Current Task',field:'current_task',filter: 'agTextColumnFilter',width: 200,},
    { headerName:'Client Manager',field:'client_manager',filter: 'agTextColumnFilter',width: 180,},
    { headerName:'Job Assignee',field:'job_assignee',filter: 'agTextColumnFilter',width: 180,},
    { headerName:'Free From Notes',field:'notes',filter: 'agTextColumnFilter', editable:true,width: 180,},   
  ];
  rowData=[{}];
  paginationConfig: any;
   constructor( private reportService:ReportsService ) {
    }
    
  onBtExport() {
      this.gridApi.exportDataAsExcel();
    }
  ngOnInit(): void {
    this.getJobMangerList()
  }
  onGridReady(params: GridReadyEvent<PeriodicElement>) {
    this.gridApi = params.api;   
  }
  private getJobMangerList() {
    const params = {
      limit: 10,
      offset: 0,
    }
  this.reportService.getJobManagerData(params).subscribe(response => {
    this.jobManagerList = response['rows'];
    this.rowData=this.jobManagerList;

  });
}
}
@Component({
  selector: 'colour-cell',
  template: `<div class="logo-container flex items-center pt-2">
  <a class="cursor-pointer">
    <img class="h-auto w-7 mx-1" src="assets/images/logo/bespoke.png" alt="bespoke">
  </a>
  <a class="cursor-pointer">
    <img class="h-auto w-7 mx-1" src="assets/images/logo/dext.png" alt="dext">
  </a>
  <a class="cursor-pointer">
    <img class="h-auto w-7 mx-1" src="assets/images/logo/ltd.png" alt="ltd">
  </a>
</div>`
})
class ColourCellRenderer implements ICellRendererAngularComp {
  agInit(ICellRendererParams) {
      // this.params = params;
  }

  refresh(ICellRendererParams) {
      return true;
  }
}
