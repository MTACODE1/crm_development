export interface TaskListItems {
  id?:number;
  text?:any;
  name?:string;
  date?:string;
  color?:string;
  dataType?:string;
  completed?:boolean;
}


export enum statusDataType {
  SETUP = 'setup',
  BOOK = 'book_keeping',
  VAT = 'vat',
  ANNUAL = 'annual_accounts',
  SELF = 'self_assessment',
}

