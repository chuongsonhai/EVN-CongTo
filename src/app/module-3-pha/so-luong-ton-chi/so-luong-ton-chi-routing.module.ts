import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoLuongTonChiListComponent } from './components/so-luong-ton-chi-list/so-luong-ton-chi-list.component';
import { SoLuongTonChiComponent } from './so-luong-ton-chi.component';

const routes: Routes = [ {path:'',component:SoLuongTonChiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:SoLuongTonChiListComponent 
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoLuongTonChiRoutingModule { }
