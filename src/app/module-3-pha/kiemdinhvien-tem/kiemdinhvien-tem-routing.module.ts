import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KDVTemCreateComponent } from './components/kdv-tem-create/kdv-tem-create.component';
import { KDVTemDeleteComponent } from './components/kdv-tem-delete/kdv-tem-delete.component';
import { KDVTemListComponent } from './components/kdv-tem-list/kdv-tem-list.component';
import { KDVTemUpdateComponent } from './components/kdv-tem-update/kdv-tem-update.component';
import { KiemdinhvienTemComponent } from './kiemdinhvien-tem.component';

const routes: Routes = [ {path:'',component:KiemdinhvienTemComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:KDVTemListComponent 
  },
  {
    path: 'Create',
    component: KDVTemCreateComponent
  },
  {
    path: 'Update',
    component: KDVTemUpdateComponent
  },
  {
    path: 'delete',
    component: KDVTemDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiemdinhvienTemRoutingModule { }
