import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data-services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activePeople: number | undefined;
  activeDevices: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.activePeople = data.activePeople;
      this.activeDevices = data.activeDevices;
    });
  }
}