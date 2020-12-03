import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminLoginCapquyenComponent } from './components/admin-login-capquyen/admin-login-capquyen.component';
import { AdminLoginService } from './admin-login.service';
import { ReactiveFormsModule } from '@angular/forms';
  
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AdminLoginComponent,
     AdminLoginCapquyenComponent,
    ],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule
      ],
  providers: [AdminLoginService],
})
export class AdminLoginModule { }
