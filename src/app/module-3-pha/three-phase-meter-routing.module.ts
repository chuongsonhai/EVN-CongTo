import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreePhaseMeterComponent } from './three-phase-meter.component';

const routes: Routes = [
  {
    path: '', component: ThreePhaseMeterComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'danhmuc-chi', loadChildren: () => import('./danhmuc-chi/danhmuc-chi.module').then(m => m.DanhmucChiModule)
      },
      {
        path: 'danhmuc-tem', loadChildren: () => import('./danhmuc-tem/danhmuc-tem.module').then(m => m.DanhmucTemModule)
      },
      {
        path: 'danhmuc-daychi', loadChildren: () => import('./danhmuc-daychi/danhmuc-daychi.module').then(m => m.DanhmucDaychiModule)
      },
      {
        path: 'danhmuc-ten-kdv', loadChildren: () => import('./danhmuc-ten-kdv/danhmuc-ten-kdv.module').then(m => m.DanhmucTenKDVModule)
      },
      {
        path: 'kdv-tem', loadChildren: () => import('./kiemdinhvien-tem/kiemdinhvien-tem.module').then(m => m.KiemdinhvienTemModule)
      },
      {
        path: 'kdv-chi', loadChildren: () => import('./kiemdinhvienchi/kiemdinhvienchi.module').then(m => m.KiemdinhvienchiModule)
      },
      {
        path: 'kdv-daychi', loadChildren: () => import('./kiemdinhviendaychi/kiemdinhviendaychi.module').then(m => m.KiemdinhviendaychiModule)
      },
      {
        path: 'nql-chi', loadChildren: () => import('./nguoi-quan-ly-chi/nguoi-quan-ly-chi.module').then(m => m.NguoiQuanLyChiModule)
      },
      {
        path: 'nql-daychi', loadChildren: () => import('./nguoi-quan-ly-day-chi/nguoi-quan-ly-day-chi.module').then(m => m.NguoiQuanLyDayChiModule)
      },
      {
        path: 'nql-tem', loadChildren: () => import('./nguoi-quan-ly-tem/nguoi-quan-ly-tem.module').then(m => m.NguoiQuanLyTemModule)
      },
      {
        path: 'slt-chi', loadChildren: () => import('./so-luong-ton-chi/so-luong-ton-chi.module').then(m => m.SoLuongTonChiModule)
      },
      {
        path: 'slt-daychi', loadChildren: () => import('./so-luong-ton-day-chi/so-luong-ton-day-chi.module').then(m => m.SoLuongTonDayChiModule)
      },
      {
        path: 'slt-tem', loadChildren: () => import('./so-luong-ton-tem/so-luong-ton-tem.module').then(m => m.SoLuongTonTemModule)
      },
      {
        path: 'qlcaidatcongto', loadChildren: () => import('./qlcai-dat-cong-to/qlcai-dat-cong-to.module').then(m => m.QLCaiDatCongToModule)
      },
      {
        path: 'dangkitemchi', loadChildren: () => import('./dangkitemchi/dangkitemchi.module').then(m => m.DangkitemchiModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreePhaseMeterRoutingModule { }
