import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../module-login/admin-login.service';
export interface image{
  imgurl:string;
}
@Component({
  selector: 'app-three-phase-meter',
  templateUrl: './three-phase-meter.component.html',
  styleUrls: ['./three-phase-meter.component.scss']
})
export class ThreePhaseMeterComponent implements OnInit {

  tendangnhap :string;
  constructor( public Service: AdminLoginService, private router:Router) { }

  @Input() productItem: image;
  productExample: image;
  ngOnInit(): void {
    this.tendangnhap = localStorage.getItem("tendangnhap");
    if(this.tendangnhap == null) {
      this.router.navigate(['/login']);
    }
    // console.log(this.Service.Current_user);
this.productExample = {
  imgurl : '/assets/download.png',
}
  }
  logout():void {
    localStorage.removeItem("tendangnhap");
    this.router.navigate(['/login'])

  }
}
