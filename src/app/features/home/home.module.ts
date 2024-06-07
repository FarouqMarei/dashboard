import { NgModule } from "@angular/core";
import { DeviceStatusDistributionComponent } from "./home/components/device-status-distribution/device-status-distribution.component";
import { DevicesStatusComponent } from "./home/components/devices-status/devices-status.component";
import { EventsSummaryComponent } from "./home/components/events-summary/events-summary.component";
import { HazardousZoneComponent } from "./home/components/hazardous-zone/hazardous-zone.component";
import { LineChartComponent } from "./home/components/line-chart/line-chart.component";
import { LiveEventsChartComponent } from "./home/components/live-events-chart/live-events-chart.component";
import { LiveEventsComponent } from "./home/components/live-events/live-events.component";
import { LiveWorkersTrendComponent } from "./home/components/live-workers-trend/live-workers-trend.component";
import { PeopleHazardousComponent } from "./home/components/people-hazardous/people-hazardous.component";
import { RealtimeStatsComponent } from "./home/components/realtime-stats/realtime-stats.component";
import { WeatherCardComponent } from "./home/components/weather-card/weather-card.component";
import { DataService } from "src/app/core/services/data.service";
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { DonutChartComponent } from "./home/components/donut-chart/donut-chart.component";
import { BarChartComponent } from "./home/components/bar-chart/bar-chart.component";
import { EventsComponent } from "./home/components/events/events.component";

@NgModule({
    imports: [
        CommonModule,
        ChartModule,
        CardModule,
        NgbModule,
        NgApexchartsModule
    ],
    declarations: [
        RealtimeStatsComponent,
        LiveEventsComponent,
        DevicesStatusComponent,
        LiveWorkersTrendComponent,
        HazardousZoneComponent,
        EventsSummaryComponent,
        DeviceStatusDistributionComponent,
        LiveEventsChartComponent,
        WeatherCardComponent,
        LineChartComponent,
        PeopleHazardousComponent,
        HomeComponent,
        DonutChartComponent,
        BarChartComponent,
        EventsComponent
    ],
    providers: [DataService],
    })
    export class HomeModule { }
    