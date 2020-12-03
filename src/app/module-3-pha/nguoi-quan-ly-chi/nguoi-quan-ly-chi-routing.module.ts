import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiQuanLyChiCreateComponent } from './components/nguoi-quan-ly-chi-create/nguoi-quan-ly-chi-create.component';
import { NguoiQuanLyChiDeleteComponent } from './components/nguoi-quan-ly-chi-delete/nguoi-quan-ly-chi-delete.component';
import { NguoiQuanLyChiListComponent } from './components/nguoi-quan-ly-chi-list/nguoi-quan-ly-chi-list.component';
import { NguoiQuanLyChiUpdateComponent } from './components/nguoi-quan-ly-chi-update/nguoi-quan-ly-chi-update.component';
import { NguoiQuanLyChiComponent } from './nguoi-quan-ly-chi.component';

const routes: Routes = [ {path:'',component:NguoiQuanLyChiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:NguoiQuanLyChiListComponent 
  },
  {
    path: 'Create',
    component: NguoiQuanLyChiCreateComponent
  },
  {
    path: 'Update',
    component: NguoiQuanLyChiUpdateComponent
  },
  {
    path: 'delete',
    component: NguoiQuanLyChiDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiQuanLyChiRoutingModule { }
