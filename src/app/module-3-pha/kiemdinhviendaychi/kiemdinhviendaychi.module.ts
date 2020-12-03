import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KiemdinhviendaychiRoutingModule } from './kiemdinhviendaychi-routing.module';
import { KiemdinhviendaychiComponent } from './kiemdinhviendaychi.component';
import { KiemdinhviendaychiUpdateComponent } from './components/kiemdinhviendaychi-update/kiemdinhviendaychi-update.component';
import { KiemdinhviendaychiDeleteComponent } from './components/kiemdinhviendaychi-delete/kiemdinhviendaychi-delete.component';
import { KiemdinhviendaychiCreateComponent } from './components/kiemdinhviendaychi-create/kiemdinhviendaychi-create.component';
import { KiemdinhviendaychiListComponent } from './components/kiemdinhviendaychi-list/kiemdinhviendaychi-list.component';


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
  declarations: [KiemdinhviendaychiComponent,
    KiemdinhviendaychiUpdateComponent,
    KiemdinhviendaychiDeleteComponent,
    KiemdinhviendaychiCreateComponent,
    KiemdinhviendaychiListComponent],
  imports: [
    CommonModule,
    KiemdinhviendaychiRoutingModule,
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
export class KiemdinhviendaychiModule { }
