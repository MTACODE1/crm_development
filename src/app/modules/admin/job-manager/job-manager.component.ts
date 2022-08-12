import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { jobType } from 'app/mock-api/apps/tasks/data';

export interface PeriodicElement {
  jobType: string;
  clientName: string;
  periodEnd: string;
  MTAdeadline: string;
  statutoryDate: string;
  jobStage: string;
  clientManager: string;
  jobAssignee: string;
  freeFromNotes: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { jobType: 'AP', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'BK', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'AP', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'VAT', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'PT', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'VAT', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'CS', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'BK', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'VAT', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'CS', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'PT', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' },
  { jobType: 'CS', clientName: 'Heading Out', periodEnd: '11/08/2022', MTAdeadline: '31/08/2022', statutoryDate: '31/08/2022', jobStage: 'At Bookkeeping Stage', clientManager: 'Hannah Mccabe Barnes', jobAssignee: 'Hira Rathor', freeFromNotes: 'Client is not sending information' }
];

@Component({
  selector: 'app-job-manager',
  templateUrl: './job-manager.component.html',
  styleUrls: ['./job-manager.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class JobManagerComponent implements OnInit {

  displayedColumns: string[] = ['jobType', 'clientName', 'periodEnd', 'MTAdeadline', 'statutoryDate', 'jobStage', 'clientManager', 'jobAssignee', 'freeFromNotes'];
  dataSource = ELEMENT_DATA;
  public ProcessTypeEnum = jobType;

  constructor() { }

  ngOnInit(): void {
  }

}
