import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NguoiQuanLyTemCreateComponent } from './components/nguoi-quan-ly-tem-create/nguoi-quan-ly-tem-create.component';
import { NguoiQuanLyTemDeleteComponent } from './components/nguoi-quan-ly-tem-delete/nguoi-quan-ly-tem-delete.component';
import { NguoiQuanLyTemListComponent } from './components/nguoi-quan-ly-tem-list/nguoi-quan-ly-tem-list.component';
import { NguoiQuanLyTemUpdateComponent } from './components/nguoi-quan-ly-tem-update/nguoi-quan-ly-tem-update.component';
import { NguoiQuanLyTemComponent } from './nguoi-quan-ly-tem.component';

const routes: Routes = [ {path:'',component:NguoiQuanLyTemComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:NguoiQuanLyTemListComponent 
  },
  {
    path: 'Create',
    component: NguoiQuanLyTemCreateComponent
  },
  {
    path: 'Update',
    component: NguoiQuanLyTemUpdateComponent
  },
  {
    path: 'delete',
    component: NguoiQuanLyTemDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NguoiQuanLyTemRoutingModule { }
