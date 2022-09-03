import { JobManager } from './../../../mock-api/apps/reports/report-data';
import { IFilterAngularComp } from "ag-grid-angular";
import { Component } from '@angular/core';
import { AgPromise, GridApi, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams } from "ag-grid-community";
import { AgGridServiceService } from "./ag-grid-service.service";
@Component({
    selector: 'company-link',
    template: ` 
    <div *ngIf="params['data'] " class="flex">
                  <a href="https://www.morethanaccountants.co.uk/salesflow/admin/v_lead.html?id={{params['data'].client_id}}"
                    target="_blank" class="flex items-center">{{params['data'].client_name | slice:0:10}}...</a>     
                    
                    <div class="logo-container flex items-center ml-2">

                    <a *ngIf="params['data'].xero && params['data'].xero!='-'" class="cursor-pointer"
                    href="https://go.xero.com/organisationlogin/default.aspx?shortcode={{params['data'].xero}}" target="_blank">
                    <img class="h-auto w-7 mx-1" src="assets/images/logo/bespoke.png" alt="bespoke">
                  </a>
                  <a *ngIf="params['data'].dext && params['data'].dext!='-'" class="cursor-pointer" href="https://app.dext.com/clients/{{params['data'].dext}}/gamma/costs/inbox"
                    target="_blank">
                    <img class="h-auto w-7 mx-1" src="assets/images/logo/dext.png" alt="dext">
                  </a>
                  <a *ngIf="params['data'].crn && params['data'].crn!='-'" class="cursor-pointer"
                    href="https://find-and-update.company-information.service.gov.uk/company/{{params['data'].crn}}"
                    target="_blank">
                    <img class="h-auto w-7 mx-1" src="assets/images/logo/ltd.png" alt="ltd">
                  </a>
    </div>
    </div> 
    `
})

export class CompanyLink implements IFilterAngularComp {
    private gridApi!: GridApi<JobManager>;
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
    onCurrentTaskChange(value) {
        let param = {
            job_id: value.job_id,
            p_status: Number(value.p_status) + 1
        }

        this.agGridService.updateJobmanagerStatus(param).subscribe(response => {
            console.log(response);
            if (response.message == 'success') {
              var rowNode = this.gridApi.getRowNode(this.params['rowIndex']);
              rowNode.setData(response['job']);
            }
        }, error => { })
    }
    constructor(private agGridService: AgGridServiceService) { }
}