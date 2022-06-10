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
  bookKeepingStatus: [
    {
      id:number,
      text:string,
      status?:string,
    }
  ];
  vATStatus: [
    {
      id:number,
      text:string,
      status?:string,
    }
  ];
  accountsStatus1:[
    {
      id:number,
      text:string,
      status?:string,
    }
  ]
}

export enum statusType {
  'book' = 'BookKeeping Status',
  'vat' = 'VAT Return Status',
  'acc' = '2021 Accounts Status',
  'accNew' ='2022 Accounts Status',
}