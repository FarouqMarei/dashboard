import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './features/devices/devices/devices.component';
import { DomainComponent } from './features/domain/domain/domain.component';
import { SettingsComponent } from './features/settings/settings/settings.component';
import { authGuard } from './core/guards/auth.service';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
   },
  { path: 'realtime', 
    loadChildren: () => import('./features/realtime/realtime.module').then(m => m.RealtimeModule),
    canActivate: [authGuard] },
  { path: 'events', 
    loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule)
   },
   // TODO, lazy loading
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
