import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiemdinhvienTemRoutingModule } from './kiemdinhvien-tem-routing.module';
import { KiemdinhvienTemComponent } from './kiemdinhvien-tem.component';

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

import {MatSnackBarModule} from '@angular/material/snack-bar';


import {MatCardModule} from '@angular/material/card';

import { MatNativeDateModule } from '@angular/material/core';
import { KDVTemListComponent } from './components/kdv-tem-list/kdv-tem-list.component';
import { KDVTemCreateComponent } from './components/kdv-tem-create/kdv-tem-create.component';
import { KDVTemUpdateComponent } from './components/kdv-tem-update/kdv-tem-update.component';
import { KDVTemDeleteComponent } from './components/kdv-tem-delete/kdv-tem-delete.component';
@NgModule({
  declarations: [KiemdinhvienTemComponent, KDVTemListComponent, KDVTemCreateComponent, KDVTemUpdateComponent, KDVTemDeleteComponent, ],
  imports: [
    CommonModule,
    KiemdinhvienTemRoutingModule,
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
export class KiemdinhvienTemModule { }
