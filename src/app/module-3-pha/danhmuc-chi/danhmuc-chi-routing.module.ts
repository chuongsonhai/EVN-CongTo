import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhmucChiDetailComponent } from './component/danhmuc-chi-detail/danhmuc-chi-detail.component';
import { DanhmucChiListComponent } from './component/danhmuc-chi-list/danhmuc-chi-list.component';
import { DanhmucChiComponent } from './danhmuc-chi.component';

const routes: Routes = [
  {path:'',component:DanhmucChiComponent,
  children:[
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: DanhmucChiListComponent
    },
    {
      path: 'list/new',
      component: DanhmucChiDetailComponent
    },
    {
      path: 'list/:id',
      component: DanhmucChiDetailComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucChiRoutingModule { }
