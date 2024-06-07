import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events/events-page.component';
import { EventsRoutingModule } from './events-routing.module';



@NgModule({
  declarations: [
    EventsPageComponent
  ],
  imports: [
    EventsRoutingModule,
    CommonModule
  ]
})
export class EventsModule { }
