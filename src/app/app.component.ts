import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { DroneListComponent } from './components/drone-list/drone-list.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WrapperComponent, 
    NgxIndexedDBModule,
    DashboardsComponent,
    DroneListComponent,
    SettingsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
