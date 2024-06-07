import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  legend: ApexLegend;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Green Zone",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 80],
        color: getComputedStyle(document.documentElement).getPropertyValue('--success'),
      },
      {
        name: "Amber Zone",
        data: [20, 50, 10, 30, 30, 20, 76, 70, 85],
        color: getComputedStyle(document.documentElement).getPropertyValue('--danger'),
      },
      {
        name: "Red Zone",
        data: [40, 90, 80, 70, 75, 50, 40, 40, 50],
        color: getComputedStyle(document.documentElement).getPropertyValue('--secondary'),
      },
    ],
    chart: {
      height: 400,
      type: "line" as const,
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight" as const,
      dashArray: [0, 0, 4]
    },
    title: {
      floating: true,
    },
    legend:{
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: 'var(--text-color-200)'
      }
    },
    tooltip: {
      enabled: true,
      theme: 'dark'
    },
    xaxis: {
      categories: [
        "6 PM",
        "7 PM",
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
        "12 AM",
        "1 AM",
        "2 AM"
      ],
      labels: {
        show: true,
        style: {
          colors: 'var(--text-color-200)'
        }
      },


    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: 'var(--text-color-200)'
        }
      },
      axisBorder:{
        show: false
      },

      crosshairs: {
        show: false
      },
    },
    grid: {
      borderColor: 'var(--text-color-400)',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
