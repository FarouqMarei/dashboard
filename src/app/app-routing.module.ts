import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { RealtimeComponent } from './features/realtime/realtime/realtime.component';
import { EventsComponent } from './features/events/events/events.component';
import { DevicesComponent } from './features/devices/devices/devices.component';
import { DomainComponent } from './features/domain/domain/domain.component';
import { SettingsComponent } from './features/settings/settings/settings.component';
import { authGuard } from './core/guards/auth.service';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'realtime', component: RealtimeComponent, canActivate: [authGuard] },
  { path: 'events', component: EventsComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'domain', component: DomainComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '*', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
