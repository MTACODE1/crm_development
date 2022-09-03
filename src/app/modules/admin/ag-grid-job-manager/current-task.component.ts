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
    
    
     <div (click)="onCurrentTaskChange(params['data'])" class="flex items-center pointer">
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
    onCurrentTaskChange(value) {
        let param = {
            job_id: value.job_id,
            p_status: Number(value.p_status) + 1
        }

        console.log(this.params)
        this.agGridService.updateJobmanagerStatus(param).subscribe(response => {
            if (response.message == 'success') {
                this.agGridService.setAfterCurrentTaskUpdatedRow(this.params['rowIndex'], response['job']);
                //     alert('test');
                //     console.log(this.params['rowIndex'])
                //     console.log('grid api ' + this.gridApi)


                //     // this.params['data'] = response['job'];
                //     var rowNode = this.gridApi?.getRowNode(this.params['rowIndex']);
                //     rowNode.setData(response['job']);

                //     console.log('rowNode', rowNode)
            }
        }, error => { })
    }
    constructor(private agGridService: AgGridServiceService) { }
}