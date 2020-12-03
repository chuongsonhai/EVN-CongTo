import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucTem, ITaiKhoan, INQLTem, } from 'src/app/Interface/module';
import { DanhmucTemService } from 'src/app/module-3-pha/danhmuc-tem/danhmuc-tem.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { NguoiQuanLyTemService } from '../../nguoi-quan-ly-tem.service';


@Component({
  selector: 'app-nguoi-quan-ly-tem-create',
  templateUrl: './nguoi-quan-ly-tem-create.component.html',
  styleUrls: ['./nguoi-quan-ly-tem-create.component.scss']
})
export class NguoiQuanLyTemCreateComponent implements OnInit {
  message:string;
  action:string;
  frmAdddaychikdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucdaychi: IDanhMucTem[];
  danhmucdaychiobser: Observable<IDanhMucTem[]>;
  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NguoiQuanLyTemCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INQLTem,
    private Service: NguoiQuanLyTemService, private Servicedaychi: DanhmucTemService, private Servicetenkdv: DanhmucTenKDVService,) {
  
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';    }
  ngOnInit(): void {
    this.frmAdddaychikdv = new FormGroup({
      ngay_Cap_Phat: new FormControl(''),
      soLuong: new FormControl(''),
      seri_Cuoi: new FormControl(''),
      seri_Dau: new FormControl(''),
      tem_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucdaychiobser = this.Servicedaychi.GetAll();
    this.danhmucdaychiobser.subscribe(val => { this.danhmucdaychi = val; });

  }

  get f() { return this.frmAdddaychikdv.controls; }
  confirmAdd() {
    if (this.frmAdddaychikdv.invalid) {
      return;
    }
    else {
      const tem: INQLTem = <any>{};
      tem.soLuong = this.f.soLuong.value;
      tem.seri_Dau = this.f.seri_Dau.value;
      tem.seri_Cuoi = this.f.seri_Cuoi.value;
      tem.ngay_Cap_Phat = this.f.ngay_Cap_Phat.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.tem_ID = this.f.tem_ID.value;
      this.data = tem;
      this.Service.Createnql(tem).subscribe(val =>
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