import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiemdinhvienchiCreateComponent } from './components/kiemdinhvienchi-create/kiemdinhvienchi-create.component';
import { KiemdinhvienchiDeleteComponent } from './components/kiemdinhvienchi-delete/kiemdinhvienchi-delete.component';
import { KiemdinhvienchiListComponent } from './components/kiemdinhvienchi-list/kiemdinhvienchi-list.component';
import { KiemdinhvienchiUpdateComponent } from './components/kiemdinhvienchi-update/kiemdinhvienchi-update.component';
import { KiemdinhvienchiComponent } from './kiemdinhvienchi.component';

const routes: Routes = [ {path:'',component:KiemdinhvienchiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:KiemdinhvienchiListComponent 
  },
  {
    path: 'Create',
    component: KiemdinhvienchiCreateComponent
  },
  {
    path: 'Update',
    component: KiemdinhvienchiUpdateComponent
  },
  {
    path: 'delete',
    component: KiemdinhvienchiDeleteComponent
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiemdinhvienchiRoutingModule { }
