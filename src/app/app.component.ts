import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { JoystickComponent } from './components/dashbord/joystick/joystick.component';
import { InformationComponent } from './components/dashbord/information/information.component';
import { MapsComponent } from './components/dashbord/maps/maps.component';
import { CameraComponent } from './components/dashbord/camera/camera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    JoystickComponent, 
    WrapperComponent, 
    NgxIndexedDBModule, 
    InformationComponent, 
    MapsComponent, 
    CameraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
