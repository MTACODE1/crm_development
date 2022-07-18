export interface TaskListItems {
  id?: number;
  text?: any;
  name: string;
  date?: string;
  color: string;
  dataType?: string;
  t_status?: string;
  task_id?: string;
}

export interface SalesflowUser {
  email: string;
  first_name: string;
  id: string;
  last_name: string;
  username: string;
}

export enum statusDataType {
  SETUP = 'setup',
  BOOK = 'book_keeping',
  VAT = 'vat',
  ANNUAL = 'annual_accounts',
  SELF = 'self_assessment',
}