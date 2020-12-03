import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiemdinhvienchiRoutingModule } from './kiemdinhvienchi-routing.module';
import { KiemdinhvienchiComponent } from './kiemdinhvienchi.component';
import { KiemdinhvienchiListComponent } from './components/kiemdinhvienchi-list/kiemdinhvienchi-list.component';
import { KiemdinhvienchiCreateComponent } from './components/kiemdinhvienchi-create/kiemdinhvienchi-create.component';
import { KiemdinhvienchiUpdateComponent } from './components/kiemdinhvienchi-update/kiemdinhvienchi-update.component';
import { KiemdinhvienchiDeleteComponent } from './components/kiemdinhvienchi-delete/kiemdinhvienchi-delete.component';


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


import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [KiemdinhvienchiComponent,
    KiemdinhvienchiListComponent,
    KiemdinhvienchiCreateComponent,
    KiemdinhvienchiUpdateComponent,
    KiemdinhvienchiDeleteComponent],
  imports: [
    CommonModule,
    KiemdinhvienchiRoutingModule,
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
export class KiemdinhvienchiModule { }
