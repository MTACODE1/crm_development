import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.scss']
})
export class DshboardComponent implements OnInit {


  public chartGithubIssues:ApexOptions = {};
  chartNewVsReturning: ApexOptions;
  
  setups:number[] = [80, 20];

  chartBookKeep: ApexOptions;
  chartVat: ApexOptions;
  chartAccount: ApexOptions;
  chartAssessment: ApexOptions;
  date = new FormControl(moment());

  constructor() { }

  ngOnInit(): void {
    this.prepareChartData();
    this.setupChartData();
  }

  setMonthAndYear(normalizedMonthAndYear: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
    console.log(this.date.value)
  }

  calculateMonth(value) {
    value === 'decrement'?this.date.setValue(this.date.value.subtract(1, 'month')):this.date.setValue(this.date.value.add(1, 'month'));
    console.log(this.date.value.toISOString())
  }


  private prepareChartData(): void {
    this.chartGithubIssues = {
      chart      : {
        fontFamily: 'inherit',
        foreColor : 'inherit',
        height    : '100%',
        type      : 'line',
        toolbar   : {
          show: false
        },
        zoom      : {
          enabled: false
        }
      },
      colors     : ['#64748B', '#94A3B8'],
      dataLabels : {
        enabled        : true,
        enabledOnSeries: [0],
        background     : {
          borderWidth: 0
        }
      },
      grid       : {
        borderColor: 'var(--fuse-border)'
      },
      labels     : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      legend     : {  show: false },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      series     : [
        {
          type: "line",
          name:'Completed',
          data: [42, 28, 43, 34, 20, 25, 22]
        },
        {
        type: "column",
        name:'Outstanding',
        data: [11, 10, 8, 11, 8, 10, 17]
      }

      ],
      states     : {
        hover: {
          filter: {
            type : 'darken',
            value: 0.75
          }
        }
      },
      stroke     : { width: [3, 0]},
      tooltip    : {
        followCursor: true,
        theme       : 'dark'
      },
      xaxis      : {
        axisBorder: {
          show: false
        },
        axisTicks : {
          color: 'var(--fuse-border)'
        },
        labels    : {
          style: {
            colors: 'var(--fuse-text-secondary)'
          }
        },
        tooltip   : {
          enabled: false
        }
      },
      yaxis      : {
        labels: {
          offsetX: -16,
          style  : {
            colors: 'var(--fuse-text-secondary)'
          }
        }
      }
    };
  }

  private setupChartData(): void {
    this.chartNewVsReturning = {
      chart      : {
          animations: {
              speed           : 400,
              animateGradually: {
                  enabled: false
              }
          },
          fontFamily: 'inherit',
          foreColor : 'inherit',
          height    : '100%',
          type      : 'donut',
          sparkline : {
              enabled: true
          }
      },
      colors     : ['#9ca3af', '#d1d5db'],
      labels     : ['Completed', 'Pending'],
      plotOptions: {
          pie: {
              customScale  : 0.9,
              expandOnClick: false,
              donut        : {
                  size: '70%'
              }
          }
      },
      series     : [80, 20],
      states     : {
          hover : {
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
      tooltip    : {
          enabled        : true,
          fillSeriesColor: false,
          theme          : 'dark',
          custom         : ({ seriesIndex, w
        }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
            </div>`
      }
  };

  //bookeep

  this.chartBookKeep = {
    chart      : {
        animations: {
            speed           : 400,
            animateGradually: {
                enabled: false
            }
        },
        fontFamily: 'inherit',
        foreColor : 'inherit',
        height    : '100%',
        type      : 'donut',
        sparkline : {
            enabled: true
        }
    },
    colors     : ['#fbbf24', '#fde68a'],
    labels     : ['Bookkeeping Pending', 'Bookkeeping Completed'],
    plotOptions: {
        pie: {
            customScale  : 0.9,
            expandOnClick: false,
            donut        : {
                size: '70%'
            }
        }
    },
    series     : [55, 45],
    states     : {
        hover : {
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
    tooltip    : {
        enabled        : true,
        fillSeriesColor: false,
        theme          : 'dark',
        custom         : ({ seriesIndex,  w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
        <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
        <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
        <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
    </div>`
    }
  };

//vat
this.chartVat = {
  chart      : {
      animations: {
          speed           : 400,
          animateGradually: {
              enabled: false
          }
      },
      fontFamily: 'inherit',
      foreColor : 'inherit',
      height    : '100%',
      type      : 'donut',
      sparkline : {
          enabled: true
      }
  },
  colors     : ['#fb923c', '#fdba74'],
  labels     :  ['VAT Completed', 'VAT Pending'],
  plotOptions: {
      pie: {
          customScale  : 0.9,
          expandOnClick: false,
          donut        : {
              size: '70%'
          }
      }
  },
  series     : [35, 65],
  states     : {
      hover : {
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
  tooltip    : {
      enabled        : true,
      fillSeriesColor: false,
      theme          : 'dark',
      custom         : ({ seriesIndex, w}): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
      <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
      <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
      <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
  </div>`
  }
};


//annual accounts
this.chartAccount = {
  chart      : {
      animations: {
          speed           : 400,
          animateGradually: {
              enabled: false
          }
      },
      fontFamily: 'inherit',
      foreColor : 'inherit',
      height    : '100%',
      type      : 'donut',
      sparkline : {
          enabled: true
      }
  },
  colors     : ['#f9a8d4', '#f472b6'],
  labels     : ['Accounts Completed', 'Accounts Pending'],
  plotOptions: {
      pie: {
          customScale  : 0.9,
          expandOnClick: false,
          donut        : {
              size: '70%'
          }
      }
  },
  series     : [25, 75],
  states     : {
      hover : {
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
  tooltip    : {
      enabled        : true,
      fillSeriesColor: false,
      theme          : 'dark',
      custom         : ({ seriesIndex, w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
        <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
        <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
        <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
    </div>`
  }
};


//assessment

this.chartAssessment = {
  chart      : {
      animations: {
          speed           : 400,
          animateGradually: {
              enabled: false
          }
      },
      fontFamily: 'inherit',
      foreColor : 'inherit',
      height    : '100%',
      type      : 'donut',
      sparkline : {
          enabled: true
      }
  },
  colors     : ['#22c55e', '#86efac'],
  labels     :  ['Assessment Completed', 'Assessment Pending'],
  plotOptions: {
      pie: {
          customScale  : 0.9,
          expandOnClick: false,
          donut        : {
              size: '70%'
          }
      }
  },
  series     : [35, 65],
  states     : {
      hover : {
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
  tooltip    : {
      enabled        : true,
      fillSeriesColor: false,
      theme          : 'dark',
      custom         : ({seriesIndex,   w }): string => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
      <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
      <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
      <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
    </div>`
  }
  };

  }

  
}
