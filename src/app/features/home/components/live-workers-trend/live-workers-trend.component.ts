import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { DataService } from 'src/app/core/services/data-services/data.service';

@Component({
  selector: 'app-live-workers-trend',
  templateUrl: './live-workers-trend.component.html',
  styleUrls: ['./live-workers-trend.component.css']
})
export class LiveWorkersTrendComponent implements OnInit {
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLabels: any[] = [];
  public lineChartData: any = [];
  public lineChartColors: any[] = [
    { backgroundColor: 'rgba(63,81,181,0.3)', borderColor: 'rgba(63,81,181,1)' },
    { backgroundColor: 'rgba(255,193,7,0.3)', borderColor: 'rgba(255,193,7,1)' },
    { backgroundColor: 'rgba(244,67,54,0.3)', borderColor: 'rgba(244,67,54,1)' }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.lineChartLabels = data.liveWorkersTrend.map((item: any) => item.time);
      this.lineChartData = [
        { data: data.liveWorkersTrend.map((item: any) => item.greenZone), label: 'Green Zone' },
        { data: data.liveWorkersTrend.map((item: any) => item.amberZone), label: 'Amber Zone' },
        { data: data.liveWorkersTrend.map((item: any) => item.redZone), label: 'Red Zone' }
      ];
    });
  }
}