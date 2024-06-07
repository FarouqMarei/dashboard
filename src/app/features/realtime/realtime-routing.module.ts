import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RealtimeComponent } from "./realtime/realtime.component";


const routes: Routes = [
    {
        path: '',
        component: RealtimeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RealtimeRoutingModule { }