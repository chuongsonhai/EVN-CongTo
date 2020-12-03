import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiQuanLyDayChiCreateComponent } from './components/nguoi-quan-ly-day-chi-create/nguoi-quan-ly-day-chi-create.component';
import { NguoiQuanLyDayChiDeleteComponent } from './components/nguoi-quan-ly-day-chi-delete/nguoi-quan-ly-day-chi-delete.component';
import { NguoiQuanLyDayChiListComponent } from './components/nguoi-quan-ly-day-chi-list/nguoi-quan-ly-day-chi-list.component';
import { NguoiQuanLyDayChiUpdateComponent } from './components/nguoi-quan-ly-day-chi-update/nguoi-quan-ly-day-chi-update.component';
import { NguoiQuanLyDayChiComponent } from './nguoi-quan-ly-day-chi.component';

const routes: Routes = [ {path:'',component:NguoiQuanLyDayChiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:NguoiQuanLyDayChiListComponent 
  },
  {
    path: 'Create',
    component: NguoiQuanLyDayChiCreateComponent
  },
  {
    path: 'Update',
    component: NguoiQuanLyDayChiUpdateComponent
  },
  {
    path: 'delete',
    component: NguoiQuanLyDayChiDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiQuanLyDayChiRoutingModule { }
