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
  customerName: string;
  package: string;
  accountant: string;
  bookKeeper: string;
  accountsTeam:string;
  companyType: string;
  lastDispo: string;
  lastEmail: string;
  lastSms: string;
  openOne: string;
  openOff: string;
  frequency: string;
  bookkeepingWeek: string;
  last: string;
  unreconciled: number;
  accountsWith: number;
  vatRegistered: string;
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
  'book' = 'BookKeeping Status',
  'vat' = 'VAT Return Status',
  'acc' = '2021 Accounts Status',
  'accNew' ='2022 Accounts Status',
}