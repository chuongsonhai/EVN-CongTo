import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QLCaiDatCongToRoutingModule } from './qlcai-dat-cong-to-routing.module';
import { QLCaiDatCongToComponent } from './qlcai-dat-cong-to.component';
  import { QLCaiDatCongToListComponent } from './components/qlcai-dat-cong-to-list/qlcai-dat-cong-to-list.component';
import { QLCaiDatCongToCreateComponent } from './components/qlcai-dat-cong-to-create/qlcai-dat-cong-to-create.component';
import { QLCaiDatCongToUpdateComponent } from './components/qlcai-dat-cong-to-update/qlcai-dat-cong-to-update.component';
import { QLCaiDatCongToDeleteComponent } from './components/qlcai-dat-cong-to-delete/qlcai-dat-cong-to-delete.component';

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
  declarations: [QLCaiDatCongToComponent, QLCaiDatCongToListComponent, QLCaiDatCongToCreateComponent, QLCaiDatCongToUpdateComponent, QLCaiDatCongToDeleteComponent],
  imports: [
    CommonModule,
    QLCaiDatCongToRoutingModule,
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
    MatSnackBarModule
    
  ]
})
export class QLCaiDatCongToModule { }
