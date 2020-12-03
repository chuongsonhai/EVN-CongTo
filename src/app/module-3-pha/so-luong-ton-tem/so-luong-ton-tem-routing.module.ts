import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoLuongTonTemListComponent } from './components/so-luong-ton-tem-list/so-luong-ton-tem-list.component';
import { SoLuongTonTemComponent } from './so-luong-ton-tem.component';

const routes: Routes = [ {path:'',component:SoLuongTonTemComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:SoLuongTonTemListComponent 
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoLuongTonTemRoutingModule { }
