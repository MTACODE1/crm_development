import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ReportData } from './report-data';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  getClientNumber(params) {
    return this.http.post<ReportData[]>(`${environment.baseUrl}/number_clients`, params);
  }
}
