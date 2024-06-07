import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EventsPageComponent } from "./events/events-page.component";


const routes: Routes = [
    {
        path: '',
        component: EventsPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EventsRoutingModule { }