import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SideBarComponent } from './components-bosung/side-bar/side-bar.component';
import { ThreePhaseMeterRoutingModule } from './three-phase-meter-routing.module';
import { ThreePhaseMeterComponent } from './three-phase-meter.component';
import { ThreePhaseMeterService } from './three-phase-meter.service';
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from './components-bosung/menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { FootBarComponent } from './components-bosung/foot-bar/foot-bar.component';




@NgModule({
  declarations: [
    ThreePhaseMeterComponent,
    MenuComponent,
    SideBarComponent,
    FootBarComponent,
    ],
  imports: [
    CommonModule,
    ThreePhaseMeterRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule
    

  ],
  providers: [
    ThreePhaseMeterService, 
    DatePipe
],
})
export class ThreePhaseMeterModule { }
