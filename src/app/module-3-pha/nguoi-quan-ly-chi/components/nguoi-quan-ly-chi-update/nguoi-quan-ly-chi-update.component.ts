import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucChi, ITaiKhoan, INQLCHi } from 'src/app/Interface/module';
import { DanhmucChiService } from 'src/app/module-3-pha/danhmuc-chi/danhmuc-chi.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { NguoiQuanLyTemService } from 'src/app/module-3-pha/nguoi-quan-ly-tem/nguoi-quan-ly-tem.service';
import { NguoiQuanLyChiService } from '../../nguoi-quan-ly-chi.service';

@Component({
  selector: 'app-nguoi-quan-ly-chi-update',
  templateUrl: './nguoi-quan-ly-chi-update.component.html',
  styleUrls: ['./nguoi-quan-ly-chi-update.component.scss']
})
export class NguoiQuanLyChiUpdateComponent implements OnInit {
  message:string;
  action:string;
  
  kdvtem: number;
  updatefrmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucdaychi: IDanhMucChi[];
  danhmucdaychiobser: Observable<IDanhMucChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NguoiQuanLyChiUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INQLCHi,
    private Service: NguoiQuanLyChiService, private Servicedaychi: DanhmucChiService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.updatefrmAddtenkdv = new FormGroup({
      ngay_Cap_Phat: new FormControl(''),
      soLuong: new FormControl(''),
      chi_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucdaychiobser = this.Servicedaychi.GetAll();
    this.danhmucdaychiobser.subscribe(val => { this.danhmucdaychi = val; });

    this.Service.GetnqlchiID(+this.data.id).subscribe(val => {
      this.kdvtem = val.id;
      this.f.ngay_Cap_Phat.setValue (val.ngay_Cap_Phat);
      this.f.soLuong.setValue (val.soLuong);  
      this.f.kdV_ID.setValue (val.kdV_ID);
      this.f.chi_ID.setValue (val.chi_ID);

   })
  };
  get f() { return this.updatefrmAddtenkdv.controls; }

  confirmAdd() {
    if (this.updatefrmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: INQLCHi = <any>{};
      tem.id = this.kdvtem
      tem.ngay_Cap_Phat = this.f.ngay_Cap_Phat.value;
      tem.soLuong = this.f.soLuong.value;

      // tem.loaiTem_name = this.f.loaiTem_name.value;
      // tem.tenKDV_name = this.f.tenKDV_name.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.chi_ID = this.f.chi_ID.value;
      
      // id: number;
      // ngay_Cap_Phat: Date;
      // kDV_ID?: number;
      // tenKDV_name?: string;
      // chi_ID?: number;
      // loaiChi_name?: string;
      // soLuongChi?: number;
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

