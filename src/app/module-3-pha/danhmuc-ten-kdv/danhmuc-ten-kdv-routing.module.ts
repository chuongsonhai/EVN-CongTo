import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanhMucTenCreateComponent } from './components/danh-muc-ten-create/danh-muc-ten-create.component';
import { DanhMucTenDeleteComponent } from './components/danh-muc-ten-delete/danh-muc-ten-delete.component';
import { DanhMucTenListComponent } from './components/danh-muc-ten-list/danh-muc-ten-list.component';
import { DanhMucTenUpdateComponent } from './components/danh-muc-ten-update/danh-muc-ten-update.component';
import { DanhmucTenKdvComponent } from './danhmuc-ten-kdv.component';

const routes: Routes = [
  {path:'',component:DanhmucTenKdvComponent,
  children:[
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },

    {
      path:'list',component:DanhMucTenListComponent
    },
    {
      path:'create',component:DanhMucTenCreateComponent
    },
    {
      path:'update',component:DanhMucTenUpdateComponent
    },
    {
      path:'delete',component:DanhMucTenDeleteComponent
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhmucTenKDVRoutingModule { }
