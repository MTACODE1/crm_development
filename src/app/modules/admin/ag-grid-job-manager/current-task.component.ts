import { IFilterAngularComp } from "ag-grid-angular";
import { Component } from '@angular/core';
import { AgPromise, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams } from "ag-grid-community";
import { AgGridServiceService } from "./ag-grid-service.service";

@Component({
    selector: 'current-task',
    template: ` 
    <div *ngIf="params['data'].current_task=='-' " class="flex">
        <span>-</span>
    </div>
     <div *ngIf="(params['data'].current_task) && params['data'].current_task!='-' " class="flex">
      
        <div (click)="onCurrentTaskChange(params['data'])" class=pt-2>
     <mat-icon class="text-green-600 " svgIcon="heroicons_outline:arrow-sm-left">
      </mat-icon>
        </div>
        <div [value]="params['data'].current_task ">
    <span>{{params['data'].current_task }}</span>
        </div>
    </div> 
    `
})

export class CurrentTask implements IFilterAngularComp {
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