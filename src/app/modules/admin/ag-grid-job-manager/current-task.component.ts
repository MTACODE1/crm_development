import { JobManager } from 'app/mock-api/apps/reports/report-data';
import { style } from '@angular/animations';
import { IFilterAngularComp } from "ag-grid-angular";
import { Component } from '@angular/core';
import { AgPromise, GridApi, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams } from "ag-grid-community";
import { AgGridServiceService } from "./ag-grid-service.service";

@Component({
    selector: 'current-task',
    template: ` 
    <div *ngIf="params['data'].current_task=='-' " class="flex">
        <span>-</span>
    </div>
     <div *ngIf="(params['data'].current_task) && params['data'].current_task!='-' " class="flex" >
    
    
     <div (click)="onCurrentTaskChange(params['data'], $event)" class="flex items-center pointer">
     <mat-icon class="text-green-600 text-xs" svgIcon="heroicons_outline:arrow-sm-right">
     </mat-icon>
     </div>

      
        <div [value]="params['data'].current_task ">
    <span>{{params['data'].current_task }}</span>
        </div>
    </div> 
    `,
    styles: ['.pointer { cursor: pointer; }']

})

export class CurrentTask implements IFilterAngularComp {
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
    onCurrentTaskChange(value, event) {
        let pStatus;
        if (Number(value.p_status) <= 7) {
            pStatus = Number(value.p_status) + 1;
        } else if (value.p_status == 8) {
            pStatus = 11;

        } else if (value.p_status == 9) {
            pStatus = 12;

        } else if (value.p_status == 10) {
            pStatus = 13;
        }

        let param = {
            job_id: value.job_id,
            p_status: pStatus
        }

            this.agGridService.updateJobmanagerStatus(param).subscribe(response => {
                if (response.message == 'success') {
                    this.agGridService.setAfterCurrentTaskUpdatedRow(this.params['rowIndex'], response['job']);
                }
            }, error => { });
    }
    constructor(private agGridService: AgGridServiceService) { }
}