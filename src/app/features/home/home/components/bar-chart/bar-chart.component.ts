import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() name: string = '';

  public chartOptions: ChartOptions = {
    series: [
      {
        name: "previous Total",
        data: [35],
        color: getComputedStyle(document.documentElement).getPropertyValue('--primary')
      },
      {
        name: "Alerts",
        data: [25],
        color: getComputedStyle(document.documentElement).getPropertyValue('--secondary')
      },
      {
        name: "Alarms",
        data: [30],
        color: getComputedStyle(document.documentElement).getPropertyValue('--tertiary')
      },
    ],
    chart: {
      type: "bar",
      height: 100,
      width: 40,
      stacked: true,
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false
      }
    },
    xaxis: {
      type: "category",
      categories: [""],

    },
    legend: {
      show: false
    },
    fill: {
      opacity: 1
    },
    tooltip:{
      enabled: false
    }
  };

}
