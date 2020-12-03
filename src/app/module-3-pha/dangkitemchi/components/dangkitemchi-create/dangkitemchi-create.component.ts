import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDangKiTemChi, IDanhMucChi, IDanhMucDayChi, IDanhMucTem, ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucChiService } from 'src/app/module-3-pha/danhmuc-chi/danhmuc-chi.service';
import { DanhmucDaychiService } from 'src/app/module-3-pha/danhmuc-daychi/danhmuc-daychi.service';
import { DanhmucTemService } from 'src/app/module-3-pha/danhmuc-tem/danhmuc-tem.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { DangkitemchiService } from '../../dangkitemchi.service';
import { DangkitemchiListComponent } from '../dangkitemchi-list/dangkitemchi-list.component';
// import { DangkitemchiListComponent } from '../dangkitemchi-list/dangkitemchi-list.component';

@Component({
  selector: 'app-dangkitemchi-create',
  templateUrl: './dangkitemchi-create.component.html',
  styleUrls: ['./dangkitemchi-create.component.scss']
})
export class DangkitemchiCreateComponent implements OnInit {
  message:string;
  action:string;

  public components: DangkitemchiListComponent ;
dataSource: MatTableDataSource<IDangKiTemChi>;
departments: IDangKiTemChi[];
departmentOsv$: Observable<IDangKiTemChi[]>;

@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  frmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucTem: IDanhMucTem[];
  danhmucTemobser: Observable<IDanhMucTem[]>;
  danhmucchi: IDanhMucChi[];
  danhmucchiobser: Observable<IDanhMucChi[]>;
  danhmucdaychi: IDanhMucDayChi[];
  danhmucdaychiobser: Observable<IDanhMucDayChi[]>;
  constructor( private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DangkitemchiCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDangKiTemChi,
    private Service: DangkitemchiService, private Servicetem: DanhmucTemService, private Servicetenkdv: DanhmucTenKDVService,
    private Servicechi: DanhmucChiService,private Servicedaychi: DanhmucDaychiService,
    ) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    
    this.frmAddtenkdv = new FormGroup({
      id_NguoiDKy: new FormControl(''),
      nam: new FormControl(''),
      ten_DKy: new FormControl(''),
      soLuong_Dky: new FormControl(''),
      id_NguoiDuyet: new FormControl(''),
      trangThaiDuyet: new FormControl(''),
      capDuyet: new FormControl(''),
      thoiGianDuyet: new FormControl(''),
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
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });

    this.danhmucTemobser = this.Servicetem.GetAll();
    this.danhmucTemobser.subscribe(val => { this.danhmucTem = val; });

    this.danhmucchiobser = this.Servicechi.GetAll();
    this.danhmucchiobser.subscribe(val => { this.danhmucchi = val; });
    
    this.danhmucdaychiobser = this.Servicedaychi.GetAll();
    this.danhmucdaychiobser.subscribe(val => { this.danhmucdaychi = val; });
  
    this.departmentOsv$ = this.Service.GetAlldkvtem();
    this.departmentOsv$.subscribe(val => { this.departments = val; });
 
  }

  get f() { return this.frmAddtenkdv.controls; }

  confirmAdd() {
    if (this.frmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: IDangKiTemChi = <any>{};
      tem.id_NguoiDKy = this.f.id_NguoiDKy.value;
      tem.nam = this.f.nam.value;
      tem.ten_DKy = this.f.ten_DKy.value;
      tem.soLuong_Dky = this.f.soLuong_Dky.value;
      tem.id_NguoiDuyet = this.f.id_NguoiDuyet.value;
      tem.trangThaiDuyet = this.f.trangThaiDuyet.value;
      tem.capDuyet = this.f.capDuyet.value;
      tem.thoiGianDuyet = this.f.thoiGianDuyet.value;

      this.data = tem;
      this.Service.CreateKdv(tem).subscribe(val =>
          console.log(val)
       

      ); this.openSnackBarok(this.message,this.action)
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
