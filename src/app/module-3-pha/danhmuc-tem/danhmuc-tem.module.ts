import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucTemRoutingModule } from './danhmuc-tem-routing.module';
import { DanhmucTemComponent } from './danhmuc-tem.component';
import { DanhmucTemListComponent } from './components/danhmuc-tem-list/danhmuc-tem-list.component';
import { DanhmucTemDetailComponent } from './components/danhmuc-tem-detail/danhmuc-tem-detail.component';
import { DanhmucTemDetailDialogComponent } from './components/danhmuc-tem-detail-dialog/danhmuc-tem-detail-dialog.component';


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


@NgModule({
  declarations: [DanhmucTemComponent, DanhmucTemListComponent, DanhmucTemDetailComponent, DanhmucTemDetailDialogComponent],
  imports: [
    CommonModule,
    DanhmucTemRoutingModule,
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
    MatToolbarModule
  ]
})
export class DanhmucTemModule { }
