import { Component } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexPlotOptions,
  ApexStates,
  ApexTitleSubtitle,
  ApexFill,
  ApexTooltip,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  stroke: ApexStroke;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {

  public chartOptions: ChartOptions = {
    series: [487, 600, 1187],
    chart: {
      width: 380,
      type: "donut",
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
              label: 'Total Events',
              fontSize: '1.6rem',
              color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-200'),

            },
            value:{
              show: true,
              fontSize: '4rem',
              color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-100'),
              offsetY: 20
            }
          },
          size: '90%'
        },
      }
    },
    labels: ["Alerts", "Alarms", "Previous Year"],
    title: {
      floating: true,
    },
    legend: {
      show: false
    },
    fill: {
      colors: [ getComputedStyle(document.documentElement).getPropertyValue('--secondary'),  getComputedStyle(document.documentElement).getPropertyValue('--tertiary'),  getComputedStyle(document.documentElement).getPropertyValue('--primary')],
    },
    stroke: {
      width: 0,
    },
    tooltip:{
      enabled: false,
    }

  };
}
