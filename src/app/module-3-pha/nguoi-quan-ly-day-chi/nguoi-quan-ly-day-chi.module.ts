import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiQuanLyDayChiRoutingModule } from './nguoi-quan-ly-day-chi-routing.module';
import { NguoiQuanLyDayChiComponent } from './nguoi-quan-ly-day-chi.component';
import { NguoiQuanLyDayChiCreateComponent } from './components/nguoi-quan-ly-day-chi-create/nguoi-quan-ly-day-chi-create.component';
import { NguoiQuanLyDayChiDeleteComponent } from './components/nguoi-quan-ly-day-chi-delete/nguoi-quan-ly-day-chi-delete.component';
import { NguoiQuanLyDayChiListComponent } from './components/nguoi-quan-ly-day-chi-list/nguoi-quan-ly-day-chi-list.component';
import { NguoiQuanLyDayChiUpdateComponent } from './components/nguoi-quan-ly-day-chi-update/nguoi-quan-ly-day-chi-update.component';


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
import {MatCardModule} from '@angular/material/card';

import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [NguoiQuanLyDayChiComponent,
    NguoiQuanLyDayChiCreateComponent,
    NguoiQuanLyDayChiDeleteComponent,
    NguoiQuanLyDayChiUpdateComponent,
    NguoiQuanLyDayChiListComponent],
  imports: [
    CommonModule,
    NguoiQuanLyDayChiRoutingModule,
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
    MatCardModule,
    MatSnackBarModule
  ]
})
export class NguoiQuanLyDayChiModule { }
