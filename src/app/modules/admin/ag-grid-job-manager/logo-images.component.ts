import { Component } from '@angular/core';
import { IFilterAngularComp } from 'ag-grid-angular';
import { AgPromise, IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';

@Component({
  selector: 'logo-images-component',
  template: `<div class="logo-container flex items-center pt-2">

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
  `
})

export class LogoImages implements IFilterAngularComp {
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
      this.params = params
  }
}