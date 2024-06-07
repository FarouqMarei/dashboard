import { NgModule } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";
import { DeviceStatusDistributionComponent } from "./components/device-status-distribution/device-status-distribution.component";
import { DevicesStatusComponent } from "./components/devices-status/devices-status.component";
import { DonutChartComponent } from "./components/charts/donut-chart/donut-chart.component";
import { EventsSummaryComponent } from "./components/events-summary/events-summary.component";
import { HazardousZoneComponent } from "./components/hazardous-zone/hazardous-zone.component";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { LiveEventsChartComponent } from "./components/charts/live-events-chart/live-events-chart.component";
import { LiveEventsComponent } from "./components/live-events/live-events.component";
import { LiveWorkersTrendComponent } from "./components/live-workers-trend/live-workers-trend.component";
import { PeopleHazardousComponent } from "./components/people-hazardous/people-hazardous.component";
import { RealtimeStatsComponent } from "./components/realtime-stats/realtime-stats.component";
import { WeatherCardComponent } from "./components/weather-card/weather-card.component";
import { HomeComponent } from "./home.component";
import { EventsComponent } from "./components/events/events.component";

@NgModule({
    imports: [
        HomeRoutingModule,
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
    