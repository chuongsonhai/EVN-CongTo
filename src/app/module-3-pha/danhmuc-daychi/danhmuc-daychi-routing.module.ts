import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhmucDaychiDetailDialogComponent } from './component/danhmuc-daychi-detail-dialog/danhmuc-daychi-detail-dialog.component';
import { DanhmucDaychiDetailComponent } from './component/danhmuc-daychi-detail/danhmuc-daychi-detail.component';
import { DanhmucDaychiListComponent } from './component/danhmuc-daychi-list/danhmuc-daychi-list.component';
import { DanhmucDaychiComponent } from './component/danhmuc-daychi/danhmuc-daychi.component';

const routes: Routes = [
  {path:'',component:DanhmucDaychiComponent,
  children:[
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: DanhmucDaychiListComponent
    },
    {
      path: 'list/new',
      component: DanhmucDaychiDetailComponent
    },
    {
      path: 'list/:id',
      component: DanhmucDaychiDetailComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucDaychiRoutingModule { }
