export interface ReportData {
  user: string;
  live: string;
  suspended: string;
  total: string;
}

export interface Dashboard {
  by_process: {
    annual_accounts: ByProcessGraph;
    bookkeeping: ByProcessGraph;
    self_assessments: ByProcessGraph;
    setup_compliance: ByProcessGraph;
    vat: ByProcessGraph;
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