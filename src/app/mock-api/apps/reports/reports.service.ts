import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Dashboard, JobManager, ReportData } from './report-data';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  getClientNumber(params) {
    return this.http.post<ReportData[]>(`${environment.baseUrl}/number_clients`, params);
  }

  getDashboardDetails(data){
    return this.http.post<Dashboard>(`${environment.baseUrl}/dashboard`, data);
  }

  getBreakdownData(params){
    return this.http.post(`${environment.baseUrl}/breakdown`, params);
  }
  getJobManagerData(params)
  {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_manager`, params);
  }
  updateJobManagerNote(params)
  {
    return this.http.post<JobManager>(`${environment.baseUrl}/job_notes`,params);
  }

}
