export interface OnboardingItems {
  type:string;
  acct: string;
  eoy_acct: string;
  escalated: boolean;
  t_status: string;
  mgmt_acct: string;
  task_id: string;
  static_id: number;
  task: string;
}

export interface DialogData {
  typeForm: string;
  stausList: OnboardingItems[];
  username: string;
  params: any;
}