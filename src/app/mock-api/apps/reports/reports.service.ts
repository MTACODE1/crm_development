import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Dashboard, ReportData } from './report-data';

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
}
