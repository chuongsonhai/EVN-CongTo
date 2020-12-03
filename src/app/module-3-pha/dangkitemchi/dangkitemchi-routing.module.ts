import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangkitemchiCreateComponent } from './components/dangkitemchi-create/dangkitemchi-create.component';
import { DangkitemchiDeleteComponent } from './components/dangkitemchi-delete/dangkitemchi-delete.component';
import { DangkitemchiListComponent } from './components/dangkitemchi-list/dangkitemchi-list.component';
import { DangkitemchiUpdateComponent } from './components/dangkitemchi-update/dangkitemchi-update.component';
import { DangkitemchiComponent } from './dangkitemchi.component';

const routes: Routes = [ {path:'',component:DangkitemchiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:DangkitemchiListComponent 
  },
  {
    path: 'Create',
    component: DangkitemchiCreateComponent
  },
  {
    path: 'Update',
    component: DangkitemchiUpdateComponent
  },
  {
    path: 'delete',
    component: DangkitemchiDeleteComponent
  },
]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangkitemchiRoutingModule { }
