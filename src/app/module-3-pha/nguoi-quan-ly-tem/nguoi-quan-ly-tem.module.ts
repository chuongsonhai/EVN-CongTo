import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NguoiQuanLyTemRoutingModule } from './nguoi-quan-ly-tem-routing.module';
import { NguoiQuanLyTemComponent } from './nguoi-quan-ly-tem.component';
import { NguoiQuanLyTemCreateComponent } from './components/nguoi-quan-ly-tem-create/nguoi-quan-ly-tem-create.component';
import { NguoiQuanLyTemDeleteComponent } from './components/nguoi-quan-ly-tem-delete/nguoi-quan-ly-tem-delete.component';
import { NguoiQuanLyTemListComponent } from './components/nguoi-quan-ly-tem-list/nguoi-quan-ly-tem-list.component';
import { NguoiQuanLyTemUpdateComponent } from './components/nguoi-quan-ly-tem-update/nguoi-quan-ly-tem-update.component';




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
  declarations: [NguoiQuanLyTemComponent,
    NguoiQuanLyTemCreateComponent,
    NguoiQuanLyTemDeleteComponent,
    NguoiQuanLyTemListComponent,
    NguoiQuanLyTemUpdateComponent
  ],
  imports: [
    CommonModule,
    NguoiQuanLyTemRoutingModule,
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
export class NguoiQuanLyTemModule { }
