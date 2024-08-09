import { Component } from '@angular/core';
import { CameraComponent } from './camera/camera.component';
import { InformationComponent } from './information/information.component';
import { JoystickComponent } from './joystick/joystick.component';
import { MapsComponent } from './maps/maps.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [CameraComponent, InformationComponent, JoystickComponent, MapsComponent, KtdGridModule],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {
}
