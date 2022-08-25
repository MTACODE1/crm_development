import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'logo-images-component',
  template: `<div class="logo-container flex items-center pt-2">
    <a class="cursor-pointer">
      <img class="h-auto w-7 mx-1" src="assets/images/logo/bespoke.png" alt="bespoke">
    </a>
    <a class="cursor-pointer">
      <img class="h-auto w-7 mx-1" src="assets/images/logo/dext.png" alt="dext">
    </a>
    <a class="cursor-pointer">
      <img class="h-auto w-7 mx-1" src="assets/images/logo/ltd.png" alt="ltd">
    </a>
  </div>`
})

export class LogoImages implements ICellRendererAngularComp {
  agInit(ICellRendererParams) {
    // this.params = params;
  }

  refresh(ICellRendererParams) {
    return true;
  }
}