export interface ReportData {
  user: string;
  live: string;
  suspended: string;
  total: string;
}

export interface Dashboard {
  by_process: {
    annual_accounts: ByProcess[];
    bookkeeping: ByProcess[];
    self_assessments: ByProcess[];
    setup_compliance: ByProcess[];
    vat: ByProcess[];
  };
  completed_outstanding: ByProcessGraph[];
  overview: {
    bookkeeping_stage: string;
    return_review_accountant: string;
    return_sent_accountant: string;
    return_sent_client: string;
    vat_completed: string;
    vat_outstanding: string;
  };
}

interface ByProcessGraph {
  completed: string;
  date?: string;
  outstanding: string;
}

export interface ByProcess {
  completed: string;
  outstanding: string;
  user?: string;
}

export interface VatBreakdown {
  accountant: string;
  bookkeeping_stage: string;
  filed: string;
  total: string;
  vat_review_accountant: string;
  vat_sent_accountant: string;
  vat_sent_client: string;
}

export interface IndividualStage {
  accountant: string;
  stage_1: string;
  stage_2: string;
  stage_3: string;
  stage_4: string;
  stage_3_4: string;
}

export interface BreakDown {
  accountant: string;
  mr_sent_client: string;
  mr_reviewed_accountant: string;
  bookkeeping_create_mr: string;
  query_sent_client: string;
  queries_requested: string;
  bookkeeping_wip: string;
  request_sent_client: string;
  bookkeeping_process_started: string;
  information_requested: string;
  total: string;
  check: string;
  mr_complete: string;
}
export interface JobManager {
  message: string;
  job_type: string;
  client_name: string;
  logo:string;
  period_end: string;
  mta_deadline: string;
  statutory_deadline: string;
  job_stage: string;
  current_task:string;
  client_manager: string;
  job_assignee: string;
  notes: string
}

export interface TableTheme {
  id: number,
  name: string
}
export interface TablePageSize {
  id: number,
  pagesize: number,
}
export interface JobAssignee {
  ja_id: string,
  ja_name: string,
}