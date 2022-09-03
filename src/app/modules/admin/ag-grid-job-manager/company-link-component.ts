import { IFilterAngularComp } from "ag-grid-angular";
import { Component } from '@angular/core';
import { AgPromise, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams } from "ag-grid-community";
import { AgGridServiceService } from "./ag-grid-service.service";
@Component({
    selector: 'company-link',
    template: ` 
    <div *ngIf="params['data'] " class="flex">
                  <a href="https://www.morethanaccountants.co.uk/salesflow/admin/v_lead.html?id={{params['data'].client_id}}"
                    target="_blank">{{params['data'].client_name}}</a>              
    </div> 
    `
  })
  
  export class CompanyLink implements IFilterAngularComp {
    isFilterActive(): boolean {
        throw new Error('Method not implemented.');
    }
    doesFilterPass(params: IDoesFilterPassParams<any>): boolean {
        throw new Error('Method not implemented.');
    }
    getModel() {
        throw new Error('Method not implemented.');
    }
    setModel(model: any): void | AgPromise<void> {
        throw new Error('Method not implemented.');
    }
  
    params: IFilterParams<any>;
    agInit(params: IFilterParams): void {
        this.params = params;
    }
    onCurrentTaskChange(value)
    {
        let param = {
            job_id:value.job_id,
            p_status:Number(value.p_status)+1
          }
          
          this.agGridService.updateJobmanagerStatus(param).subscribe(response => {
             if(response.message=='success'){
            this.params['data']=response['job'];
           }
          }, error => { })
    }
    constructor( private agGridService: AgGridServiceService) { }
  }