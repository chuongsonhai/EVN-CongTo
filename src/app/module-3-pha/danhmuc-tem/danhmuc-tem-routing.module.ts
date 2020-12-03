import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhmucTemDetailComponent } from './components/danhmuc-tem-detail/danhmuc-tem-detail.component';
import { DanhmucTemListComponent } from './components/danhmuc-tem-list/danhmuc-tem-list.component';
import { DanhmucTemComponent } from './danhmuc-tem.component';

const routes: Routes = [ {path:'',component:DanhmucTemComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: DanhmucTemListComponent
  },
  {
    path: 'list/new',
    component: DanhmucTemDetailComponent
  },
  {
    path: 'list/:id',
    component: DanhmucTemDetailComponent
  }
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucTemRoutingModule { }
