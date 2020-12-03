import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanhmucDaychiRoutingModule } from './danhmuc-daychi-routing.module';
import { DanhmucDaychiComponent } from './component/danhmuc-daychi/danhmuc-daychi.component';
import { DanhmucDaychiListComponent } from './component/danhmuc-daychi-list/danhmuc-daychi-list.component';
import { DanhmucDaychiDetailComponent } from './component/danhmuc-daychi-detail/danhmuc-daychi-detail.component';
import { DanhmucDaychiDetailDialogComponent } from './component/danhmuc-daychi-detail-dialog/danhmuc-daychi-detail-dialog.component';

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
  declarations: [DanhmucDaychiComponent, DanhmucDaychiListComponent, DanhmucDaychiDetailComponent, DanhmucDaychiDetailDialogComponent],
  imports: [
    CommonModule,
    DanhmucDaychiRoutingModule,
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
export class DanhmucDaychiModule { }
