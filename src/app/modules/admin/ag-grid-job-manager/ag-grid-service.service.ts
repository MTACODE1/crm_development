import { CustomTooltip } from 'app/modules/admin/ag-grid-job-manager/custom-tooltip-component';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { JobManager } from 'app/mock-api/apps/reports/report-data';
import { environment } from 'environments/environment';
import { CompanyLink } from './company-link-component';
import { CurrentTask } from './current-task.component';
import { LogoImages } from './logo-images.component';

@Injectable({
  providedIn: 'root'
})
export class AgGridServiceService {
  currentTaskChange = new Subject<any>();

  constructor(private http: HttpClient) { }
  getJobManagerData(params) {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_manager`, params);
  }
  updateJobManagerNote(params) {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_notes`, params);
  }
  updateJobmanagerStatus(params) {
    return this.http.post<JobManager>(`${environment.baseUrl}/process_status`, params);
  }
  getJobAssignee(params) {
    return this.http.post<JobManager>(`${environment.baseUrl}/jm_job_assignee`, params);
  }

  public columnDefs: ColDef[] =
    [
      {
        headerName: 'Job Type', field: 'job_type', checkboxSelection: true, headerCheckboxSelection: true,
        tooltipField: 'job_type', width: 150, filter: 'agMultiColumnFilter', rowDrag: true
      },
      { headerName: 'Client Name', field: 'client_name', filter: 'agMultiColumnFilter', width: 275, cellRenderer: CompanyLink },
      { headerName: '', field: 'Image', floatingFilter: false, filter: false, sortable: false, cellRenderer: LogoImages, width: 130, },
      {
        headerName: 'Period End', field: 'period_end', filter: 'agDateColumnFilter', width: 130, filterParams: {

          comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split('-');
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
          maxValidYear: 2050,
          inRangeFloatingFilterDateFormat: 'Do MM YYYY',
        },
      },
      {
        headerName: 'MTA Deadline', field: 'mta_deadline', filter: 'agDateColumnFilter', width: 150,
        filterParams: {

          comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split('-');
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
          maxValidYear: 2050,
          inRangeFloatingFilterDateFormat: 'Do MM YYYY',
        },
      },
      {
        headerName: 'Statutory Date', field: 'statutory_deadline', filter: 'agDateColumnFilter', width: 150, filterParams: {

          comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
            var dateAsString = cellValue;
            if (dateAsString == null) return -1;
            var dateParts = dateAsString.split('-');
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
          maxValidYear: 2050,
          inRangeFloatingFilterDateFormat: 'Do MM YYYY',
        },
      },
      { headerName: 'Job Stage', field: 'job_stage', filter: 'agMultiColumnFilter' },

      { headerName: 'Current Task', field: 'current_task', filter: 'agMultiColumnFilter', width: 300, cellRenderer: CurrentTask, tooltipField: 'current_task' },
      { headerName: 'Client Manager', field: 'client_manager', filter: 'agMultiColumnFilter', width: 150, },
      { headerName: 'Task Assignee', field: 'job_assignee', filter: 'agMultiColumnFilter', width: 150, },
      { headerName: 'Free Form Notes', field: 'notes', filter: 'agMultiColumnFilter', editable: true, width: 150, },
    ];


  public themes() {
    return [
      { id: 1, name: 'Alpine', value: 'ag-theme-alpine' },
      { id: 2, name: 'Alpine Dark', value: 'ag-theme-alpine-dark' },
      { id: 3, name: 'Balham', value: 'ag-theme-balham' },
      { id: 4, name: 'Balham Dark', value: 'ag-theme-balham-dark' },
      { id: 5, name: 'Material', value: 'ag-theme-material' },
    ]
  }
  public pageSize() {
    return [
      { id: 1, pagesize: 10 },
      { id: 2, pagesize: 25 },
      { id: 3, pagesize: 50 },
      { id: 4, pagesize: 100 },
      { id: 5, pagesize: 500 },
      { id: 6, pagesize: 1000 },
    ]
  }


  public setAfterCurrentTaskUpdatedRow(index, data) {
    let param = {
      rowIndex: index,
      data: data
    };
    this.currentTaskChange.next(param)
  }

  public getAfterCurrentTaskUpdatedRow(): Observable<any> {
    return this.currentTaskChange.asObservable();
  }


}
