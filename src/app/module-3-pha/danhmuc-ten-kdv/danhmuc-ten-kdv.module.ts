import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucTenKDVRoutingModule } from './danhmuc-ten-kdv-routing.module';
import { DanhmucTenKdvComponent } from './danhmuc-ten-kdv.component';
import { DanhMucTenListComponent } from './components/danh-muc-ten-list/danh-muc-ten-list.component';
import { DanhMucTenCreateComponent } from './components/danh-muc-ten-create/danh-muc-ten-create.component';
import { DanhMucTenUpdateComponent } from './components/danh-muc-ten-update/danh-muc-ten-update.component';
import { DanhMucTenDeleteComponent } from './components/danh-muc-ten-delete/danh-muc-ten-delete.component';

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
import { KiemdinhvienTemService } from '../kiemdinhvien-tem/kiemdinhvien-tem.service';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [DanhmucTenKdvComponent,DanhMucTenListComponent,DanhMucTenCreateComponent,DanhMucTenUpdateComponent,DanhMucTenDeleteComponent ],
  imports: [
    CommonModule,
    DanhmucTenKDVRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule
  ] , providers: [
    KiemdinhvienTemService,
  ],
})
export class DanhmucTenKDVModule { }
