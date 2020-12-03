import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoLuongTonDayChiListComponent } from './components/so-luong-ton-day-chi-list/so-luong-ton-day-chi-list.component';
import { SoLuongTonDayChiComponent } from './so-luong-ton-day-chi.component';

const routes: Routes = [ {path:'',component:SoLuongTonDayChiComponent,
children:[
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component:SoLuongTonDayChiListComponent 
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoLuongTonDayChiRoutingModule { }
