import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QLCaiDatCongToCreateComponent } from './components/qlcai-dat-cong-to-create/qlcai-dat-cong-to-create.component';
import { QLCaiDatCongToDeleteComponent } from './components/qlcai-dat-cong-to-delete/qlcai-dat-cong-to-delete.component';
import { QLCaiDatCongToListComponent } from './components/qlcai-dat-cong-to-list/qlcai-dat-cong-to-list.component';
import { QLCaiDatCongToUpdateComponent } from './components/qlcai-dat-cong-to-update/qlcai-dat-cong-to-update.component';
import { QLCaiDatCongToComponent } from './qlcai-dat-cong-to.component';

const routes: Routes = [ {path:'',component:QLCaiDatCongToComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:QLCaiDatCongToListComponent 
  },
  {
    path: 'Create',
    component: QLCaiDatCongToCreateComponent
  },
  {
    path: 'Update',
    component: QLCaiDatCongToUpdateComponent
  },
  {
    path: 'delete',
    component: QLCaiDatCongToDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QLCaiDatCongToRoutingModule { }
