import { Injectable } from '@angular/core';
import { LogoImages } from './logo-images.component';

@Injectable({
  providedIn: 'root'
})
export class AgGridServiceService {

  constructor() { }

  public getColumens() {
    return [
      {
        headerName: 'Job Type', field: 'job_type', checkboxSelection: true,
        headerCheckboxSelection: true, floatingFilter: true, tooltipField: 'job_type', width: 150,
       filter: 'agMultiColumnFilter' },
      { headerName: 'Client Name', field: 'client_name', filter: 'agMultiColumnFilter', width: 200, },
      { headerName: '', field: 'Image', floatingFilter: false, filter: false, sortable: false, cellRenderer: LogoImages, width: 160, },
      { headerName: 'Period End', field: 'period_end', filter: 'agMultiColumnFilter', width: 120, },
      { headerName: 'MTA Deadline', field: 'mta_deadline', filter: 'agMultiColumnFilter', width: 200, },
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
          inRangeFloatingFilterDateFormat: 'Do MMM YYYY',
        },
      },
      { headerName: 'Job Stage', field: 'job_stage', filter: 'agMultiColumnFilter', },
      { headerName: 'Current Task', field: 'current_task', filter: 'agMultiColumnFilter', width: 200, },
      { headerName: 'Client Manager', field: 'client_manager', filter: 'agMultiColumnFilter', width: 180, },
      { headerName: 'Job Assignee', field: 'job_assignee', filter: 'agMultiColumnFilter', width: 180, },
      { headerName: 'Free From Notes', field: 'notes', filter: 'agMultiColumnFilter', editable: true, width: 180, },
    ];

  }

  public themes() {
    return [
      { id: 1, name: 'Alpine' },
      { id: 2, name: 'Alpine Dark' },
      { id: 3, name: 'Balham' },
      { id: 4, name: 'Balham Dark' },
      { id: 4, name: 'Material' },
    ]
  }

}
