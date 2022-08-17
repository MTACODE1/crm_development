import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewBookkeepingDetailsComponent } from 'app/modules/admin/reports/bookkeeping-break-down/view-bookkeeping-details/view-bookkeeping-details.component';
import { ViewDetailsComponent } from 'app/modules/admin/reports/bookkeeping-break-down/view-details/view-details.component';
import { BreakDown } from './report-data';

@Injectable({
  providedIn: 'root'
})
export class BreakdownTableDetailsService {

  breakdownList: BreakDown[] = [];

  constructor(public dialog:MatDialog,private _router: Router) { }

  getVatBreakdownDetails(element, value, name){
    let data={
      title : null,
      count : null,
      clients : null
    };
    if(value === 'filed'){
      data.title = name,
      data.count = element.filed,
      data.clients = element.filed_clients
    }
    else if(value === 'sentClient'){
      data.title = name,
      data.count = element.vat_sent_client,
      data.clients = element.vat_sent_client_clients
    }
    else if(value === 'review'){
      data.title = name,
      data.count = element.vat_review_accountant,
      data.clients = element.vat_review_accountant_clients
    }
    else if(value === 'sentAccountant'){
      data.title = name,
      data.count = element.vat_sent_accountant,
      data.clients = element.vat_sent_accountant_clients
    }
    else {
      data.title = name,
      data.count = element.bookkeeping_stage,
      data.clients = element.bookkeeping_stage_clients
    }
    let id:number=1;
    //this._router.navigate(['/health']);
    this._router.navigate(['/health/'+id])
    // this.dialog.open(ViewDetailsComponent, {
    //   width: '30vw',
    //   data:data
    // })
  }

  getBookkeepingBreakdownDetails(element, value, name){
    let data={
      title: null,
      count : null,
      clients : null
    };
    if(value === 'complete'){
      data.title = name,
      data.count = element.mr_complete,
      data.clients = element.mr_complete_clients
    }
    else if(value === 'sentClient'){
      data.title = name,
      data.count = element.mr_sent_client,
      data.clients = element.mr_sent_client_clients
    }
    else if(value === 'review'){
      data.title = name,
      data.count = element.mr_reviewed_accountant,
      data.clients = element.mr_reviewed_accountant_clients
    }
    else if(value === 'createMr'){
      data.title = name,
      data.count = element.bookkeeping_create_mr,
      data.clients = element.bookkeeping_create_mr_clients
    }
    else if(value === 'querySent'){
      data.title = name,
      data.count = element.query_sent_client,
      data.clients = element.query_sent_client_clients
    }
    else if(value === 'queryRequest'){
      data.title = name,
      data.count = element.queries_requested,
      data.clients = element.queries_requested_clients
    }
    else if(value === 'wip'){
      data.title = name,
      data.count = element.bookkeeping_wip,
      data.clients = element.bookkeeping_wip_clients
    }
    else if(value === 'informationsent'){
      data.title = name,
      data.count = element.request_sent_client,
      data.clients = element.request_sent_client_clients
    }
    else if(value === 'informationRequest'){
      data.title = name,
      data.count = element.information_requested,
      data.clients = element.information_requested_clients
    }
    else {
      data.title = name,
      data.count = element.bookkeeping_process_started,
      data.clients = element.bookkeeping_process_started_clients
    }   

    this.dialog.open(ViewBookkeepingDetailsComponent, {
      width: '30vw',
      data: data,
    })
  }

}
