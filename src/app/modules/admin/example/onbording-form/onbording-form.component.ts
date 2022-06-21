import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnboardingItems, ONBOARDING_FORM_ITEMS } from './onborading-item';

@Component({
  selector: 'app-onbording-form',
  templateUrl: './onbording-form.component.html',
  styleUrls: ['./onbording-form.component.scss']
})
export class OnbordingFormComponent implements OnInit {

  task: OnboardingItems[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: any, 
    public readonly dialogRef: MatDialogRef<OnbordingFormComponent>) 
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

  public toggleClass(item: OnboardingItems): void {
    item.active = !item.active;
  }

}
