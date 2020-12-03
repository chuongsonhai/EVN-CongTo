import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoLuongTonTemRoutingModule } from './so-luong-ton-tem-routing.module';
import { SoLuongTonTemListComponent } from './components/so-luong-ton-tem-list/so-luong-ton-tem-list.component';
import { SoLuongTonTemComponent } from './so-luong-ton-tem.component';

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
  declarations: [
    SoLuongTonTemListComponent,
    SoLuongTonTemComponent],
  imports: [
    CommonModule,
    SoLuongTonTemRoutingModule,
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
    
  ],
  bootstrap: [SoLuongTonTemComponent]
})
export class SoLuongTonTemModule { }
