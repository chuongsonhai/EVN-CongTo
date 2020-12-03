import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoLuongTonChiRoutingModule } from './so-luong-ton-chi-routing.module';
import { SoLuongTonChiListComponent } from './components/so-luong-ton-chi-list/so-luong-ton-chi-list.component';

import { SoLuongTonChiComponent } from './so-luong-ton-chi.component';

import { HttpClientModule } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {A11yModule} from '@angular/cdk/a11y';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [SoLuongTonChiComponent, SoLuongTonChiListComponent, ],
  imports: [
    CommonModule,
    SoLuongTonChiRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    A11yModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class SoLuongTonChiModule { }
