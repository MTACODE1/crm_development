import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  info?: string;
  stage?: string;
  request?: string;
}

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls: ['./example.component.scss'],
})

export class ExampleComponent implements OnInit {
  dataSource: PeriodicElement[] = [];
  bookBtnCount: number = 0;
  vatBtnCount: number = 0;
  annualBtnCount: number = 0;
  bookBtnName = 'Information Requested';
  vatStatus = 'Bookkeeping Stage';
  annualStatus = 'Information Request sent to Client';
  bgColor: any;
  vatbgColor: any;
  annualbgColor: any;

  constructor() { }

  ngOnInit(): void {
    this.getBookStatus();
  }

  private getBookStatus(): void {
    this.dataSource = [
      { id: 0, info: 'Information Requested', stage: 'Bookkeeping Stage', request: 'Information Request sent to Client' },
      { id: 1, info: 'Information Request sent to client', stage: 'VAT Return Sent to Accountatnt', request: 'Query Request sent to client' },
      { id: 2, info: 'Information received from client', stage: 'VAT reviewed by Accountatnt', request: 'Work in progress' },
      { id: 3, info: 'Queries Requested', stage: 'VAt return sent to client', request: 'Accounts Reviews by Accountatnt' },
      { id: 4, info: "Query request sent to client", stage: 'VAt return confimed by client', request: 'Review Complete' },
      { id: 5, info: "Query Received by client", stage: 'VAt return Failed', request: 'Accounts sent to client' },
      { id: 6, info: "MR Received by Accountant", request: 'Accounts Fail' },
      { id: 7, info: "Level 1 MR completed" },
      { id: 8, info: "Level 2 MR completed" },
      { id: 9, info: "Level 3 MR completed" },
      { id: 10, info: "Review completed" },
      { id: 11, info: "Level 1 MR sent to client" },
      { id: 12, info: "Level 2 MR sent to client" },
      { id: 13, info: "Level 3 MR sent to client" }
    ]
  }

  public changeBookStatus(): void {
    this.bookBtnCount = this.bookBtnCount + 1;
    this.dataSource.forEach(element => {
      if (element.id === this.bookBtnCount) {
        this.bookBtnName = element.info;
        this.bgColor = element.id !== 0 && element.id <= 4?'start':element.id != 4 && element.id <= 10?'in-progress':'complete'
      }
    });
  }

  public changeVatStatus(): void {
    this.vatBtnCount = this.vatBtnCount + 1;
    this.dataSource.forEach(element => {
      if (element.id === this.vatBtnCount) {
        this.vatStatus = element.stage;
        if (element.stage == undefined) this.vatBtnCount = 0, this.vatStatus = this.dataSource[0].stage;
        this.vatbgColor = element.id !== 0 && element.id <= 2?'start':element.id != 2 && element.id <= 4?'in-progress':'complete'
      }
    });
  }

  public changeAnnualStatus(): void {
    this.annualBtnCount = this.annualBtnCount + 1;
    this.dataSource.forEach(element => {
      if (element.id === this.annualBtnCount) {
        this.annualStatus = element.request;
        if (element.request == undefined) this.annualBtnCount = 0, this.annualStatus = this.dataSource[0].request;
        this.annualbgColor = element.id !== 0 && element.id <= 5?'start':'complete'
      }
    });
  }

}
