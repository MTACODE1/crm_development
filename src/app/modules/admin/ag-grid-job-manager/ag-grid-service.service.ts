import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { JobManager } from 'app/mock-api/apps/reports/report-data';
import { environment } from 'environments/environment';
import { CurrentTask } from './current-task.component';
import { LogoImages } from './logo-images.component';

@Injectable({
  providedIn: 'root'
})
export class AgGridServiceService {

  constructor(private http:HttpClient) { }
  getJobManagerData(params)
  {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_manager`, params);
  }
  updateJobManagerNote(params)
  {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_notes`,params);
  }
  updateJobmanagerStatus(params)
  {
    return this.http.post<JobManager>(`${environment.baseUrl}/process_status`,params);
  }

  public columnDefs: ColDef[]=
 [
      {
        headerName: 'Job Type', field: 'job_type', checkboxSelection: true, 
        headerCheckboxSelection: true, floatingFilter: true, tooltipField: 'job_type', width: 150, 
       filter: 'agMultiColumnFilter' },
      { headerName: 'Client Name', field: 'client_name', filter: 'agMultiColumnFilter', width: 200, },
      { headerName: '', field: 'Image', floatingFilter: false, filter: false, sortable: false, cellRenderer: LogoImages, width: 160, },
      { headerName: 'Period End', field: 'period_end', filter: 'agMultiColumnFilter', width: 120, },
      { headerName: 'MTA Deadline', field: 'mta_deadline', filter: 'agMultiColumnFilter', width: 200 , sort: 'desc' },
      {
        headerName: 'Statutory Date', field: 'statutory_deadline', filter: 'agDateColumnFilter', width: 200, filterParams: {

          
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
          maxValidYear: 2050,
          inRangeFloatingFilterDateFormat: 'Do MM YYYY',
        },
      },
      { headerName: 'Job Stage', field: 'job_stage', filter: 'agMultiColumnFilter' },
      { headerName: 'Current Task', field: 'current_task', filter: 'agMultiColumnFilter', width: 300 ,cellRenderer:CurrentTask },
      { headerName: 'Client Manager', field: 'client_manager', filter: 'agMultiColumnFilter', width: 180, },
      { headerName: 'Job Assignee', field: 'job_assignee', filter: 'agMultiColumnFilter', width: 180, },
      { headerName: 'Free From Notes', field: 'notes', filter: 'agMultiColumnFilter', editable: true, width: 180, },
    ];

  

  public themes() {
    return [
      { id: 1, name: 'Alpine',value:'ag-theme-alpine' },
      { id: 2, name: 'Alpine Dark',value:'ag-theme-alpine-dark'  },
      { id: 3, name: 'Balham',value:'ag-theme-balham'  },
      { id: 4, name: 'Balham Dark',value:'ag-theme-balham-dark'  },
      { id: 4, name: 'Material' ,value:'ag-theme-material' },
    ]
  }

}

