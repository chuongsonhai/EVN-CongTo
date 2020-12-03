import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-kdv-tem-create',
  templateUrl: './kdv-tem-create.component.html',
  styleUrls: ['./kdv-tem-create.component.scss']
})
export class KDVTemCreateComponent implements OnInit {
  message:string;
  action:string;
 
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Su_Dung', 'soLuong', 'tenKDV_name', 'loaiTem_name', 'seri_Dau', 'seri_Cuoi', 'soLuong_Huy', 'seri_Tem_Huy', 'actions',];
  dataSource: MatTableDataSource<IKDVTem>;
  departments: IKDVTem[];
  departmentOsv$: Observable<IKDVTem[]>;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  frmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucTem: IDanhMucTem[];
  danhmucTemobser: Observable<IDanhMucTem[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KDVTemCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVTem,
    private Service: KiemdinhvienTemService, private Servicetem: DanhmucTemService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.frmAddtenkdv = new FormGroup({
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
  }

  get f() { return this.frmAddtenkdv.controls; }

  confirmAdd() {
    if (this.frmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: IKDVTem = <any>{};
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
      this.Service.CreateKdv(tem).subscribe(val => 
    
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

