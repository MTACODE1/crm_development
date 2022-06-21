import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { OnboardingItems, ONBOARDING_FORM_ITEMS } from './onborading-item';

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {

  task: OnboardingItems[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, 
    public readonly dialogRef: MatDialogRef<OnbordingFormComponent>, private _fuseConfirmationService: FuseConfirmationService) 
    { }

  ngOnInit(): void {
    this.loadDataStatus();
  }

  private loadDataStatus(): void {
    this.task = ONBOARDING_FORM_ITEMS.map(item => {
      return item;
    });
  }

  public statusChanged(event): void {
    console.log(event)
  }

  private toggleClass(item: OnboardingItems): void {
    item.active = !item.active;
  }

  toggleData(item:OnboardingItems, status:boolean) {
    const message = status?`Add <b>${item.text}</b> to onboarding for client name`:`Remove <b>${item.text}</b> from onboarding for client name?`
    const dialogRef = this._fuseConfirmationService.open({
      title : 'Are you sure?',
      message : message,
      dismissible: true,
      actions:{
        cancel:{
          label:'No'
        },
        confirm :{
          label: 'Yes',
          color: 'warn'
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirmed') {
        this.toggleClass(item);
      }
    });
  }

}
