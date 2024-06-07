import { Component, OnInit } from '@angular/core';
import { ErrorHandler } from 'src/app/core/components/error-handler/error-handler';
import { DataService } from 'src/app/core/services/data-services/data.service';

@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.css']
})
export class DevicesStatusComponent implements OnInit, ErrorHandler {
  deviceStatus: any;

  constructor(private dataService: DataService) {}

  handleError(error: any): void {
    // do something with the exception
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.deviceStatus = data.deviceStatus;
    });
  }
}
