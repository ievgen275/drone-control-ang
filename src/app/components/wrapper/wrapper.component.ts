import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [ 
    CommonModule, 
    MatSidenavModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {
}
