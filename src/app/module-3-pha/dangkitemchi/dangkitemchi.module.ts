import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DangkitemchiRoutingModule } from './dangkitemchi-routing.module';
import { DangkitemchiComponent } from './dangkitemchi.component';
import { DangkitemchiListComponent } from './components/dangkitemchi-list/dangkitemchi-list.component';
import { DangkitemchiCreateComponent } from './components/dangkitemchi-create/dangkitemchi-create.component';
import { DangkitemchiUpdateComponent } from './components/dangkitemchi-update/dangkitemchi-update.component';
import { DangkitemchiDeleteComponent } from './components/dangkitemchi-delete/dangkitemchi-delete.component';

import {MatCardModule} from '@angular/material/card';

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

import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [DangkitemchiComponent, DangkitemchiListComponent, DangkitemchiCreateComponent, DangkitemchiUpdateComponent, DangkitemchiDeleteComponent],
  imports: [
    CommonModule,
    DangkitemchiRoutingModule,
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
export class DangkitemchiModule { }
