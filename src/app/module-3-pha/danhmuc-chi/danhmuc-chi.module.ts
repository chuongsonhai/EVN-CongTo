import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucChiRoutingModule } from './danhmuc-chi-routing.module';
import { DanhmucChiComponent } from './danhmuc-chi.component';
import { DanhmucChiListComponent } from './component/danhmuc-chi-list/danhmuc-chi-list.component';
import { DanhmucChiDetailComponent } from './component/danhmuc-chi-detail/danhmuc-chi-detail.component';
import { DanhmucChiDetailDialogComponent } from './component/danhmuc-chi-detail-dialog/danhmuc-chi-detail-dialog.component';
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
  declarations: [DanhmucChiComponent, DanhmucChiListComponent, DanhmucChiDetailComponent, DanhmucChiDetailDialogComponent],
  imports: [
    CommonModule,
    DanhmucChiRoutingModule,
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
export class DanhmucChiModule { }
