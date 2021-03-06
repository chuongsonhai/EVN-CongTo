import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucTem, ITaiKhoan, IKDVTem } from 'src/app/Interface/module';
import { DanhmucTemService } from 'src/app/module-3-pha/danhmuc-tem/danhmuc-tem.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { KiemdinhvienTemService } from '../../kiemdinhvien-tem.service';

@Component({
  selector: 'app-kdv-tem-update',
  templateUrl: './kdv-tem-update.component.html',
  styleUrls: ['./kdv-tem-update.component.scss']
})
export class KDVTemUpdateComponent implements OnInit {
  message:string;
  action:string;
  kdvtem: number;
  updatefrmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucTem: IDanhMucTem[];
  danhmucTemobser: Observable<IDanhMucTem[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KDVTemUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVTem,
    private Service: KiemdinhvienTemService, private Servicetem: DanhmucTemService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.updatefrmAddtenkdv = new FormGroup({
      ngay_Su_Dung: new FormControl(''),
      seri_Dau: new FormControl(''),
      seri_Cuoi: new FormControl(''),
      soLuong_Huy: new FormControl(''),
      seri_Tem_Huy: new FormControl(''),
      soLuong: new FormControl(''),
      tem_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucTemobser = this.Servicetem.GetAll();
    this.danhmucTemobser.subscribe(val => { this.danhmucTem = val; });

    this.Service.GetdkvtemID(+this.data.id).subscribe(val => {
      this.kdvtem = val.id;
      this.f.soLuong.setValue (val.soLuong);
      this.f.seri_Tem_Huy.setValue (val.seri_Tem_Huy);  
      this.f.seri_Cuoi.setValue (val.seri_Cuoi);
      this.f.soLuong_Huy.setValue (val.soLuong_Huy);
      this.f.seri_Dau.setValue (val.seri_Dau);
      this.f.kdV_ID.setValue (val.kdV_ID);
      this.f.tem_ID.setValue (val.tem_ID);
      this.f.ngay_Su_Dung.setValue (val.ngay_Su_Dung);
   })

  };
  get f() { return this.updatefrmAddtenkdv.controls; }

  confirmAdd() {
    if (this.updatefrmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: IKDVTem = <any>{};
      tem.id = this.kdvtem
      tem.soLuong = this.f.soLuong.value;
      tem.seri_Tem_Huy = this.f.seri_Tem_Huy.value;
      tem.soLuong_Huy = this.f.soLuong_Huy.value;
      tem.seri_Cuoi = this.f.seri_Cuoi.value;
      tem.seri_Dau = this.f.seri_Dau.value;
      tem.ngay_Su_Dung = this.f.ngay_Su_Dung.value;
      // tem.loaiTem_name = this.f.loaiTem_name.value;
      // tem.tenKDV_name = this.f.tenKDV_name.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.tem_ID = this.f.tem_ID.value;

      this.data = tem;
      this.Service.Update(this.kdvtem,tem).subscribe(val =>
        
          console.log(val)
    
      );this.openSnackBarok(this.message,this.action)
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openSnackBarok(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
