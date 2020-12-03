import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiQuanLyChiRoutingModule } from './nguoi-quan-ly-chi-routing.module';
import { NguoiQuanLyChiComponent } from './nguoi-quan-ly-chi.component';
import { NguoiQuanLyChiCreateComponent } from './components/nguoi-quan-ly-chi-create/nguoi-quan-ly-chi-create.component';
import { NguoiQuanLyChiDeleteComponent } from './components/nguoi-quan-ly-chi-delete/nguoi-quan-ly-chi-delete.component';
import {  NguoiQuanLyChiListComponent} from './components/nguoi-quan-ly-chi-list/nguoi-quan-ly-chi-list.component';
import {  NguoiQuanLyChiUpdateComponent} from './components/nguoi-quan-ly-chi-update/nguoi-quan-ly-chi-update.component';


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
  declarations: [NguoiQuanLyChiComponent,
    NguoiQuanLyChiCreateComponent,
    NguoiQuanLyChiDeleteComponent,
    NguoiQuanLyChiListComponent,
    NguoiQuanLyChiUpdateComponent
  ],
  imports: [
    CommonModule,
    NguoiQuanLyChiRoutingModule,
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
export class NguoiQuanLyChiModule { }
