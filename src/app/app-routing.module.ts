import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [


  {path:'login',loadChildren:() => import('./module-login/admin-login.module') .then(m =>m.AdminLoginModule),
},
  
  {path:'',loadChildren:() => import('./module-3-pha/three-phase-meter.module').then(m =>m.ThreePhaseMeterModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
