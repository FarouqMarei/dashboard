import { Component, OnInit } from '@angular/core';
import { LiveEvents } from 'src/app/core/models/live-events';
import { DataService } from 'src/app/core/services/data-services/data.service';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent implements OnInit {
  liveEvents: LiveEvents[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.liveEvents = this.dataService.getJsonData().liveEvents?.events;
  }
}
