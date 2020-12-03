import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiemdinhviendaychiComponent } from './kiemdinhviendaychi.component';
import { KiemdinhviendaychiListComponent } from './components/kiemdinhviendaychi-list/kiemdinhviendaychi-list.component';
import { KiemdinhviendaychiCreateComponent } from './components/kiemdinhviendaychi-create/kiemdinhviendaychi-create.component';
import { KiemdinhviendaychiUpdateComponent } from './components/kiemdinhviendaychi-update/kiemdinhviendaychi-update.component';
import { KiemdinhviendaychiDeleteComponent } from './components/kiemdinhviendaychi-delete/kiemdinhviendaychi-delete.component';

const routes: Routes = [ {path:'',component:KiemdinhviendaychiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:KiemdinhviendaychiListComponent 
  },
  {
    path: 'Create',
    component: KiemdinhviendaychiCreateComponent
  },
  {
    path: 'Update',
    component: KiemdinhviendaychiUpdateComponent
  },
  {
    path: 'delete',
    component: KiemdinhviendaychiDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiemdinhviendaychiRoutingModule { }
