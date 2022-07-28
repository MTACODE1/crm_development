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

export interface ByProcess{
  completed: string;
  outstanding: string;
  user?: string;
}

export interface Breakdown {
  accountant: string;
  bookkeeping_stage: string;
  filed: string;
  total: string;
  vat_review_accountant: string;
  vat_sent_accountant: string;
  vat_sent_client: string;
}