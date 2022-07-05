import { Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { FuseLoadingService } from '@fuse/services/loading';

@Component({
  selector: 'fuse-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'fuseLoadingBar',
})

export class FuseLoadingBarComponent implements OnChanges, OnInit, OnDestroy {
  @HostBinding('className') componentClass: string;
  @Input() autoMode: boolean = true;
  mode: 'determinate' | 'indeterminate';
  progress: number = 0;
  show: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _fuseLoadingService: FuseLoadingService) { }


  ngOnChanges(changes: SimpleChanges): void {
    // Auto mode
    if ('autoMode' in changes) {
      this._fuseLoadingService.setAutoMode(coerceBooleanProperty(changes.autoMode.currentValue));
    }
  }


  ngOnInit(): void {
    // Subscribe to the service
    this._fuseLoadingService.mode$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.mode = value;
      });

    this._fuseLoadingService.progress$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.progress = value;
      });

    this._fuseLoadingService.show$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.show = value;
        this.componentClass = this.show?'h-full':'h-1.5';
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
