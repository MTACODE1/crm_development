export interface User {
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  status?: string;
  first_name?: string;
  last_name?: string;
  username?: string
}

export interface TableModel {
  id: number;
  limited_company: string;
  company_type: string;
  completionweek: string;
  bookkeeping_quarter: string;
  date_of_sale: string;
  vat_quarter: string;
  eoy_accountant: string;
  management_accountant: string;
  name: string;
  surname: string;
  registered_for_VAT: boolean;
  bookkeeping_status: [stateStatusModel];
  vat_status: [stateStatusModel];
  annual_accounts_status_1: [stateStatusModel]
  annual_accounts_status_2: [stateStatusModel]
}

export interface stateStatusModel {
  static_id: number,
  task: string,
  acct: string,
  eoy_acct: string,
  escalated: string,
  mgmt_acct: string,
}

export enum statusType {
  bookkeeping = 'Bookkeeping Status',
  vat = 'VAT Return Status',
  annual_accounts = '2021 Accounts Status',
  accNew = '2022 Accounts Status',
  self_assessment_status_1 = 'Self Assessment Status 1',
  self_assessment_status_2 = 'Self Assessment Status 2',
  conf_stmt = 'Confirmation Statement Status',
}