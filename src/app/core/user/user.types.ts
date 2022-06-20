export interface User
{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  status?: string;
}

export interface TableModel {
  id: number;
  isSuspended: boolean;
  companyName: string;
  accountant: string;
  bookKeeper: string;
  companyType: string;
  completionweek: string;
  saledate: string;
  package: string;
  quarters: string;
  frequency: string;
  vatRegistered: string;
  vatQuarter: string;
  vatscheme: string;
  eoy: string;
  duedate: string;
  oneoff: string;
  bookKeepingStatus: [stateStatusModel];
  vATStatus: [stateStatusModel];
  accountsStatus1:[stateStatusModel]
}

export interface stateStatusModel {
  id:number,
  text:string,
  status?:string,
  visited?:boolean,
}

export enum statusType {
  book = 'Bookkeeping Status',
  vat = 'VAT Return Status',
  acc = '2021 Accounts Status',
  accNew ='2022 Accounts Status',
  self ='Self Assessment Status',
}