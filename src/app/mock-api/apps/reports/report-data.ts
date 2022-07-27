export interface ReportData {
  user: string;
  live: string;
  suspended: string;
  total: string;
}

export interface Dashboard {
  by_process: any;
  completed_outstanding: outstanding[];
  overview: {
    bookkeeping_stage: string;
    return_review_accountant: string;
    return_sent_accountant: string;
    return_sent_client: string;
    vat_completed: string;
    vat_outstanding: string;
  };
}

interface outstanding {
  completed: any;
  date: any;
  outstanding: any;
}