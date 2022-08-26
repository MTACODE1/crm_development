import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp, IFilterAngularComp, ITooltipAngularComp } from 'ag-grid-angular';
import { ColDef, GridOptions, GridApi, GridReadyEvent, ITooltipParams, ICellRendererParams, IFilterParams, IDoesFilterPassParams, } from 'ag-grid-community';
import { JobManager, TableTheme } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import { CustomTooltip } from 'app/modules/admin/ag-grid-job-manager/custom-tooltip-component';
import { AgGridServiceService } from './ag-grid-service.service';

@Component({
  selector: 'app-ag-grid-job-manager',
  templateUrl: './ag-grid-job-manager.component.html',
  styleUrls: ['./ag-grid-job-manager.component.scss']
})
export class AgGridJobManagerComponent implements OnInit {
  private gridApi!: GridApi<JobManager>;
  public gridOptions: GridOptions;
  public tooltipShowDelay = 0;
  public tooltipHideDelay = 2000;
  public notesList: []
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true, 
    tooltipComponent: CustomTooltip,
  };
  public rowSelection: 'single' | 'multiple' = 'multiple';
  public rowData = [{}];
  public rowGroupPanelShow = 'always';
  public pivotPanelShow = 'always';
  public themesList: TableTheme[] = [];
  public columnDefs: ColDef[];
  public searchTerm: string;
  public selectTheme : string;
  constructor( private agGridService: AgGridServiceService) { }

  ngOnInit(): void {
   
    this.getJobMangerList();
    this.columnDefs = this.agGridService.columnDefs;
    this.themesList = this.agGridService.themes();
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

 getJobMangerList() {
  
    this.agGridService.getJobManagerData({}).subscribe(response => {
      if (response['rows'].length)
        this.rowData = response['rows'];
    }, error => {});
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
    const themeValue=document.getElementById('ag-grid')
    themeValue.classList.remove(themeValue.classList.value);
    themeValue.classList.add(event.value);
  }
}



