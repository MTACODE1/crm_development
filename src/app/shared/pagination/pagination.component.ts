import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { getValueInRange, isNumber } from '../pipe/util';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {

  pageCount = 0;
  pages: number[] = [];
  @Input() disabled = false;
  @Input() boundaryLinks = false;
  @Input() directionLinks = true;
  @Input() ellipses = true;
  @Input() rotate = true;
  @Input() collectionSize: number;
  @Input() maxSize: number;
  @Input() page = 1;
  @Input() pageSize: number;

  @Output() pageChange = new EventEmitter<number>(true);
  @Input() size: 'sm' | 'lg' = 'sm';


  constructor(private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe(["(max-width: 525px)"]).subscribe((result: BreakpointState) => {
      console.log(result);
      if (result.matches) {
        this.maxSize =3;
      }
      else {
        this.maxSize = 5;
      }
    })
  }

  public hasPrevious(): boolean {
    return this.page > 1;
  }

  public hasNext(): boolean {
    return this.page < this.pageCount;
  }

  public selectPage(pageNumber: number): void {
    this._updatePages(pageNumber);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this._updatePages(this.page);
  }

  public isEllipsis(pageNumber): boolean {
    return pageNumber === -1;
  }

  private _applyEllipses(start: number, end: number) {
    if (this.ellipses) {
      if (start > 0) {
        if (start > 1) {
          this.pages.unshift(-1);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        if (end < (this.pageCount - 1)) {
          this.pages.push(-1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }

  private _applyRotation(): [number, number] {
    let start = 0;
    let end = this.pageCount;
    const leftOffset = Math.floor(this.maxSize / 2);
    const rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

    if (this.page <= leftOffset) {
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      start = this.pageCount - this.maxSize;
    } else {
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }

    return [start, end];
  }

  private _applyPagination(): [number, number] {
    const page = Math.ceil(this.page / this.maxSize) - 1;
    const start = page * this.maxSize;
    const end = start + this.maxSize;

    return [start, end];
  }

  private _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

  private _updatePages(newPage: number) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }

    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    this._setPageInRange(newPage);

    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;

      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }
      this.pages = this.pages.slice(start, end);
      this._applyEllipses(start, end);
    }
  }

}
