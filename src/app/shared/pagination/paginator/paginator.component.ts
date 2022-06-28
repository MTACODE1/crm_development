import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})

export class PaginatorComponent implements OnInit {

  @Input() pageSizes = [25, 50, 100];
  @Input() count = 0;
  @Input() perPage: number | 'all';
  @Input() showCountChoose = true;
  @Input() page = 1;
  @Output() pageChange = new EventEmitter<{ limit: number, offset: number, page: number }>();


  constructor() {
  }

  ngOnInit() {
    if (!this.perPage) {
      this.perPage = this.pageSizes[0];
    }
  }

  pageChanged(page = null) {
    if (page) {
      this.page = page;
    }

    let limit;
    let offset;
    if (this.perPage === 'all') {
      this.perPage = this.count;
      limit = this.count;
      offset = 0;
    } else {
      limit = this.perPage;
      offset = (this.page - 1) * this.perPage;
    }

    this.pageChange.emit({
      limit: limit,
      offset: offset,
      page: page,
    });
  }
}
