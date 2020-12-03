import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ITaiKhoan } from 'src/app/Interface/module';
import { AdminLoginService } from '../../admin-login.service';
import { DOCUMENT, } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


export interface image {
  imgurl: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})


export class AdminLoginComponent implements OnInit {
  durationInSeconds = 5;
  done:string;
  skip:string;
  message:string;
  action:string;
  @Input() productItem: image;
  @Inject(DOCUMENT) private document: any;
  productExample: image;
  public data: ITaiKhoan;
  LoginForm: FormGroup;
  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, private Service: AdminLoginService, private router: Router

  ) { }

  ngOnInit(): void {
    this.productExample = {
      imgurl: '/assets/download.png',
    }
    this.message ="Sai Tên Tài Khoản Hoặc Mật Khẩu";
    this.action ='Thoát';
    this.done ="Đăng Nhập Thành Công";
    this.skip ="tắt";
    this.LoginForm = new FormGroup({
      tenDangNhap: new FormControl(''),
      matKhau: new FormControl(''),

    });
  }
  get f() { return this.LoginForm.controls; }
  login() {
    if (this.LoginForm.invalid) {
      return;
    }
    else {
      const tem: ITaiKhoan = <any>{};
      tem.tenDangNhap = this.f.tenDangNhap.value;
      tem.matKhau = this.f.matKhau.value;
      this.data = tem;
      this.Service.Login(tem).subscribe(val => {
        try {
          if (val.id != 0) {
            localStorage.setItem("tendangnhap", val.tenDayDu);
            this.Service.Current_user = val;
            this.next();
            this.openSnackBarok(this.done,this.skip)
          }
          else {
            this.openSnackBar(this.message,this.action);
          }
          console.log(val);
        } catch (error) {
          console.log(error);
        }
      }
      );
    }

  }
  next() {
    this.router.navigate(['/'])
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  openSnackBarok(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
