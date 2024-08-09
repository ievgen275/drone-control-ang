import { Routes } from '@angular/router';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { DroneListComponent } from './components/drone-list/drone-list.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    { path: 'dashboards', component: DashboardsComponent },
    { path: 'drone-list', component: DroneListComponent },
    { path: 'settings', component: SettingsComponent }
]
