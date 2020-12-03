import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IDangKiTemChi, IDanhMucChi, IDanhMucDayChi, IDanhMucTem, ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucChiService } from 'src/app/module-3-pha/danhmuc-chi/danhmuc-chi.service';
import { DanhmucDaychiService } from 'src/app/module-3-pha/danhmuc-daychi/danhmuc-daychi.service';
import { DanhmucTemService } from 'src/app/module-3-pha/danhmuc-tem/danhmuc-tem.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { DangkitemchiService } from '../../dangkitemchi.service';

@Component({
  selector: 'app-dangkitemchi-update',
  templateUrl: './dangkitemchi-update.component.html',
  styleUrls: ['./dangkitemchi-update.component.scss']
})
export class DangkitemchiUpdateComponent implements OnInit {
  message:string;
  action:string;
  
  dangki: number;
  dangkitemchi: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucTem: IDanhMucTem[];
  danhmucTemobser: Observable<IDanhMucTem[]>;
  danhmucchi: IDanhMucChi[];
  danhmucchiobser: Observable<IDanhMucChi[]>;
  danhmucdaychi: IDanhMucDayChi[];
  danhmucdaychiobser: Observable<IDanhMucDayChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DangkitemchiUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDangKiTemChi,private Service: DangkitemchiService, private Servicetem: DanhmucTemService, private Servicetenkdv: DanhmucTenKDVService,
    private Servicechi: DanhmucChiService,private Servicedaychi: DanhmucDaychiService,
    ) {      this.message ="Thao Tác Thành Công";
    this.action ='Thoát';

  }
  ngOnInit(): void {
    this.dangkitemchi = new FormGroup({
      id_NguoiDKy: new FormControl(''),
      nam: new FormControl(''),
      ten_DKy: new FormControl(''),
      soLuong_Dky: new FormControl(''),
      id_NguoiDuyet: new FormControl(''),
      trangThaiDuyet: new FormControl(''),
      capDuyet: new FormControl(''),
      thoiGianDuyet: new FormControl(''),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucTemobser = this.Servicetem.GetAll();
    this.danhmucTemobser.subscribe(val => { this.danhmucTem = val; });

    this.danhmucchiobser = this.Servicechi.GetAll();
    this.danhmucchiobser.subscribe(val => { this.danhmucchi = val; });
    this.danhmucdaychiobser = this.Servicedaychi.GetAll();
    this.danhmucdaychiobser.subscribe(val => { this.danhmucdaychi = val; });
  
    // this.departmentOsv$ = this.Service.GetAlldkvtem();
    // this.departmentOsv$.subscribe(val => { this.departments = val; });

    this.Service.GetdkvtemID(+this.data.id).subscribe(val => {
      this.dangki = val.id;
      this.f.nam.setValue (val.nam);
      this.f.ten_DKy.setValue (val.ten_DKy);  
      this.f.soLuong_Dky.setValue (val.soLuong_Dky);
      this.f.id_NguoiDuyet.setValue (val.id_NguoiDuyet);
      this.f.trangThaiDuyet.setValue (val.trangThaiDuyet);
      this.f.capDuyet.setValue (val.capDuyet);
      this.f.thoiGianDuyet.setValue (val.thoiGianDuyet);
      this.f.id_NguoiDKy.setValue (val.id_NguoiDKy);
      // nam: new FormControl(''),
      // ten_DKy: new FormControl(''),
      // soLuong_Dky: new FormControl(''),
      // id_NguoiDuyet: new FormControl(''),
      // trangThaiDuyet: new FormControl(''),
      // capDuyet: new FormControl(''),
      // thoiGianDuyet: new FormControl(''),

   });
  //  this.departmentOsv$ = this.Service.GetAllnqlchi();
  //  this.preparationData();
  };
  get f() { return this.dangkitemchi.controls; }
  confirmAdd() {
    if (this.dangkitemchi.invalid) {
      return;
    }
    else {
      const tem: IDangKiTemChi = <any>{};
      tem.id = this.dangki
      tem.nam = this.f.nam.value;
      tem.id_NguoiDKy = this.f.id_NguoiDKy.value;
      tem.ten_DKy = this.f.ten_DKy.value;
      tem.soLuong_Dky = this.f.soLuong_Dky.value;
      tem.id_NguoiDuyet = this.f.id_NguoiDuyet.value;
      tem.trangThaiDuyet = this.f.trangThaiDuyet.value;
      tem.capDuyet = this.f.capDuyet.value;
      tem.thoiGianDuyet = this.f.thoiGianDuyet.value;
      // id_NguoiDKy: number,
      // nguoiDangKy_name: string,
      // nam: number,
      // ten_DKy: string,
      // soLuong_Dky: number,
      // id_NguoiDuyet: number,
      // nguoiDuyet_name: string,
      // trangThaiDuyet: number,
      // capDuyet: number,
      // thoiGianDuyet:Date     
      this.data = tem;
      this.Service.Update(this.dangki,tem).subscribe(val => 
          console.log(val)
      );
      this.openSnackBarok(this.message,this.action)
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