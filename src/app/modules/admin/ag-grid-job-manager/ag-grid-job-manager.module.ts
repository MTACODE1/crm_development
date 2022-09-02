import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { AgGridJobManagerRoutingModule } from './ag-grid-job-manager-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AgGridJobManagerComponent } from './ag-grid-job-manager.component';
import { AgGridModule } from 'ag-grid-angular';
import { LicenseManager } from 'ag-grid-enterprise'
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'environments/environment';
import { LogoImages } from './logo-images.component';
import { CustomTooltip } from './custom-tooltip-component';
import { CurrentTask } from './current-task.component';
LicenseManager.setLicenseKey(environment.agGridLicensedKey);

@NgModule({
  declarations: [AgGridJobManagerComponent, LogoImages, CustomTooltip, CurrentTask],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    AgGridJobManagerRoutingModule,
    AgGridModule,
    MatIconModule,
  ]
})
export class AgGridJobManagerModule { }
