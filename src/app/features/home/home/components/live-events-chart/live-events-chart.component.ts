import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip
};


@Component({
  selector: 'app-live-events-chart',
  templateUrl: './live-events-chart.component.html',
  styleUrls: ['./live-events-chart.component.css']
})
export class LiveEventsChartComponent {

  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Series A",
        data: [40, 20, 60, 51, 90, 82, 69, 50, 60],
        color: getComputedStyle(document.documentElement).getPropertyValue('--danger')
      },
    ],
    chart: {
      height: 100,
      type: "area",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true
      },
      background: 'transparent',
      zoom: {
        enabled: false
      },
    },
    title: {
      floating: true
    },

    tooltip: {
      theme: 'dark'
    },

    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        show: false
      },
      labels: {
        show: false,
      },
      floating: false,

    },

    yaxis: {
      show: false,
      max: 100,
      min: 0,
    },

    grid: {
      xaxis: {
        lines: {
          show: false
        },
      },
      yaxis: {
        lines: {
          show: false
        },

      },
    },
    legend: {
      show: false,
      floating: true,
    },

  };
}
