import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Dashboard } from 'app/mock-api/apps/reports/report-data';
import { ReportsService } from 'app/mock-api/apps/reports/reports.service';
import * as moment from 'moment';
import { ApexOptions } from 'ng-apexcharts';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss'],
})

export class DshboardComponent implements OnInit, OnDestroy {
  chartCompleteOutstanding: ApexOptions = {};
  chartSetupCompliance: ApexOptions;
  setups: number[] = [80, 20];
  chartBookKeep: ApexOptions;
  chartVat: ApexOptions;
  chartAccount: ApexOptions;
  chartAssessment: ApexOptions;
  date = new FormControl(moment());
  dashboardResult: Dashboard;

  private readonly destroyer$: Subject<void> = new Subject();
  constructor(private ReportService: ReportsService) { }

  ngOnInit(): void {
    this.getDashboardData();
  }

  ngOnDestroy(): void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

  public setMonthAndYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>): void {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  public calculateMonth(value): void {
    value === 'decrement' ? this.date.setValue(this.date.value.subtract(1, 'month')) : this.date.setValue(this.date.value.add(1, 'month'));
    console.log(this.date.value.toISOString())
  }

  private getDashboardData(): void {
    this.ReportService.getDashboardDetails({}).pipe(takeUntil(this.destroyer$))
      .subscribe(result => {
        this.dashboardResult = result;
        this.prepareChartData();
        this.byProcessChartData();
      });
  }

  private prepareChartData(): void {
    this.chartCompleteOutstanding = {
      chart: {
        fontFamily: 'inherit',
        foreColor: 'inherit',
        height: '100%',
        type: 'line',
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ['#64748B', '#94A3B8'],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: {
          borderWidth: 0
        }
      },
      grid: {
        borderColor: 'var(--fuse-border)'
      },
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      legend: { show: false },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      series: [
        {
          type: "line",
          name: 'Completed',
          data: this.dashboardResult?.completed_outstanding?.map(({ completed }) => +completed)
        },
        {
          type: "column",
          name: 'Outstanding',
          data: this.dashboardResult?.completed_outstanding?.map(({ outstanding }) => +outstanding)
        }
      ],
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.75
          }
        }
      },
      stroke: { width: [3, 0] },
      tooltip: {
        followCursor: true,
        theme: 'dark'
      },
    };
  }

  private byProcessChartData(): void {
    this.chartSetupCompliance = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#9ca3af', '#d1d5db'],
      labels: Object.keys(this.dashboardResult.by_process.setup_compliance),
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: '70%'
          }
        }
      },
      series: Object.values(this.dashboardResult.by_process.setup_compliance).map(str => {
        return Number(str);
      }),
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({ seriesIndex, w
        }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
            </div>`
      }
    };

    //bookeep
    this.chartBookKeep = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#fbbf24', '#fde68a'],
      labels: Object.keys(this.dashboardResult.by_process.bookkeeping),
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: { size: '70%' }
        }
      },
      series: Object.values(this.dashboardResult.by_process.bookkeeping).map(str => {
        return Number(str);
      }),
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({ seriesIndex, w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
          <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
          <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
          <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
        </div>`
      }
    };

    //vat
    this.chartVat = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#fb923c', '#fdba74'],
      labels: Object.keys(this.dashboardResult.by_process.vat),
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: '70%'
          }
        }
      },
      series: Object.values(this.dashboardResult.by_process.vat).map(str => {
        return Number(str);
      }),
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({ seriesIndex, w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
        <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
        <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
        <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
      </div>`
      }
    };

    //annual accounts
    this.chartAccount = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#f9a8d4', '#f472b6'],
      labels: Object.keys(this.dashboardResult.by_process.annual_accounts),
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: '70%'
          }
        }
      },
      series: Object.values(this.dashboardResult.by_process.annual_accounts).map(str => {
        return Number(str);
      }),
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({ seriesIndex, w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
        <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
        <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
        <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
    </div>`
      }
    };

    //assessment
    this.chartAssessment = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        height: '100%',
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#22c55e', '#86efac'],
      labels: Object.keys(this.dashboardResult.by_process.self_assessments),
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: '70%'
          }
        }
      },
      series: Object.values(this.dashboardResult.by_process.self_assessments).map(str => {
        return Number(str);
      }),
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: 'dark',
        custom: ({ seriesIndex, w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
      <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
      <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
      <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
    </div>`
      }
    };

  }
}