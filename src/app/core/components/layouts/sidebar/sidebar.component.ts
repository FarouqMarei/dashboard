import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {

  currentUrl: string = '';

  constructor(private router: Router
  ) {
    
  }

  ngAfterViewInit() {
    this.router.events
    .subscribe((res: any) => {
      this.currentUrl = res?.url;
    });
  }

  isHomeUrl() {
    return !(
      this.isRealtimeUrl() ||
      this.isEventsUrl() ||
      this.isDevicesUrl() ||
      this.isDomainUrl() ||
      this.isSettingsUrl()
    );
  }

  isRealtimeUrl() {
    return this.currentUrl?.includes('realtime');
  }

  isEventsUrl() {
    return this.currentUrl?.includes('events');
  }

  isDevicesUrl() {
    return this.currentUrl?.includes('devices');
  }

  isDomainUrl() {
    return this.currentUrl?.includes('domain');
  }

  isSettingsUrl() {
    return this.currentUrl?.includes('settings');
  }
}
