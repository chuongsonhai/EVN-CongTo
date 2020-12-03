import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucDayChi, ITaiKhoan, IKDVDayChi } from 'src/app/Interface/module';
import { DanhmucDaychiService } from 'src/app/module-3-pha/danhmuc-daychi/danhmuc-daychi.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { KiemdinhviendaychiService } from '../../kiemdinhviendaychi.service';

@Component({
  selector: 'app-kiemdinhviendaychi-update',
  templateUrl: './kiemdinhviendaychi-update.component.html',
  styleUrls: ['./kiemdinhviendaychi-update.component.scss']
})
export class KiemdinhviendaychiUpdateComponent implements OnInit {
  message:string;
  action:string;
  
  kdvtem: number;
  updatefrmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucdaychi: IDanhMucDayChi[];
  danhmucdaychiobser: Observable<IDanhMucDayChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KiemdinhviendaychiUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVDayChi,
    private Service: KiemdinhviendaychiService, private Servicedaychi: DanhmucDaychiService, private Servicetenkdv: DanhmucTenKDVService,) {
      
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.updatefrmAddtenkdv = new FormGroup({
      ngay_Su_Dung: new FormControl(''),
      soLuong: new FormControl(''),
      loaiDayChi_Huy: new FormControl(''),
      soLuong_Huy: new FormControl(''),
      daychi_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucdaychiobser = this.Servicedaychi.GetAll();
    this.danhmucdaychiobser.subscribe(val => { this.danhmucdaychi = val; });

    this.Service.GetdkvdaychiID(+this.data.id).subscribe(val => {
      this.kdvtem = val.id;
      this.f.ngay_Su_Dung.setValue (val.ngay_Su_Dung);
      this.f.soLuong.setValue (val.soLuong);  
      this.f.loaiDayChi_Huy.setValue (val.loaiDayChi_Huy);
      this.f.soLuong_Huy.setValue (val.soLuong_Huy);
      this.f.kdV_ID.setValue (val.kdV_ID);
      this.f.daychi_ID.setValue (val.daychi_ID);

   });

     // ngay_Su_Dung: Date;
      // kDV_ID?: number;
      // tenKDV_name?: string;
      // soLuong?: number;
      // daychi_ID?: number;
      // loaiDayChi_name?: string;
      // loaiDayChi_Huy: string;
      // soLuong_Huy?: number;
  };
  get f() { return this.updatefrmAddtenkdv.controls; }

  confirmAdd() {
    if (this.updatefrmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: IKDVDayChi = <any>{};
      tem.id = this.kdvtem
      tem.ngay_Su_Dung = this.f.ngay_Su_Dung.value;
      tem.soLuong = this.f.soLuong.value;
      tem.soLuong_Huy = this.f.soLuong_Huy.value;
      tem.loaiDayChi_Huy = this.f.loaiDayChi_Huy.value;
      // tem.loaiTem_name = this.f.loaiTem_name.value;
      // tem.tenKDV_name = this.f.tenKDV_name.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.daychi_ID = this.f.daychi_ID.value;

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

