export interface User
{
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  status?: string;
  first_name?:string;
  last_name?:string;
  username?:string
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
  vatStatus: [stateStatusModel];
  accountsStatus1:[stateStatusModel]
  accountsStatus2:[stateStatusModel]
}

export interface stateStatusModel {
  id:number,
  text:string,
  status?:string,
  visited?:boolean,
}

export enum statusType {
  bookkeeping = 'Bookkeeping Status',
  vat = 'VAT Return Status',
  annual_accounts = '2021 Accounts Status',
  accNew ='2022 Accounts Status',
  self ='Self Assessment Status',
}