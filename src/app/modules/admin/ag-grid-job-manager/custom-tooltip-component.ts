import { Component } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';
import { jobType, taskType } from 'app/mock-api/apps/tasks/data';

@Component({
  selector: 'tooltip-component',
  template: ` <div class="custom-tooltip bg-gray-600">
    <p class="p-3 whitespace-nowrap font-bold text-white">
      <span>{{ProcessTypeEnum[data.job_type]}}</span>
    </p>
 
  </div>`,
  styles: [
    `
      :host {
        position: absolute;
        height: 70px;
        pointer-events: none;
        transition: opacity 1s;
      }
      :host.ag-tooltip-hiding {
        opacity: 0;
      }
    `,
  ],
})

export class CustomTooltip implements ITooltipAngularComp {
  public ProcessTypeEnum = jobType; 
  private params!: { color: string } & ITooltipParams;
  public data!: any;

  agInit(params: { color: string } & ITooltipParams): void {
    this.params = params;

    this.data = params.api!.getDisplayedRowAtIndex(params.rowIndex!)!.data;

  }
}