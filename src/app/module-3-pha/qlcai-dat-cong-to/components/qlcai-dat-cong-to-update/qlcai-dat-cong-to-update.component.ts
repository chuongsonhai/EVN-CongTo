import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ITaiKhoan, QLCaiDatCongTo } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { QLCaiDatCongToService } from '../../qlcai-dat-cong-to.service';

@Component({
  selector: 'app-qlcai-dat-cong-to-update',
  templateUrl: './qlcai-dat-cong-to-update.component.html',
  styleUrls: ['./qlcai-dat-cong-to-update.component.scss']
})
export class QLCaiDatCongToUpdateComponent implements OnInit {
  message:string;
  action:string;
  
  dataSource: MatTableDataSource<QLCaiDatCongTo>;
  departmentss: QLCaiDatCongTo[];
  departmentOsvss$: Observable<QLCaiDatCongTo[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  kdvtem: number;
  updatefrmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<QLCaiDatCongToUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QLCaiDatCongTo,
    private Service: QLCaiDatCongToService, private Servicetenkdv: DanhmucTenKDVService,) {      this.message ="Thao Tác Thành Công";
    this.action ='Thoát';

  }
  ngOnInit(): void {
    this.updatefrmAddtenkdv = new FormGroup({
      dienLuc: new FormControl(''),
      maCongTo: new FormControl(''),
      ngay_Cai: new FormControl(''),
      nguoiCai: new FormControl(null),
      kdV_ID: new FormControl(null),
      soTem: new FormControl(''),
      maKim: new FormControl(''),
      soLanCai: new FormControl(''),
      ghiChu: new FormControl(''),
    
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });

    this.Service.GetnqlchiID(+this.data.id).subscribe(val => {
      this.kdvtem = val.id;
      this.f.dienLuc.setValue (val.dienLuc);
      this.f.maCongTo.setValue (val.maCongTo);  
      this.f.ngay_Cai.setValue (val.ngay_Cai);  
      this.f.nguoiCai.setValue (val.nguoiCai);  
      this.f.kdV_ID.setValue (val.kdV_ID);
      this.f.soTem.setValue (val.soTem);
      this.f.maKim.setValue (val.maKim);
      this.f.soLanCai.setValue (val.soLanCai);
      this.f.ghiChu.setValue (val.ghiChu);

   });
   this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
   this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });

   this.departmentOsvss$ = this.Service.GetAllnqlchi();
   this.departmentOsvss$.subscribe(val =>{
     this.departmentss =val;
   })
 
  };
  get f() { return this.updatefrmAddtenkdv.controls; }
  confirmAdd() {
    if (this.updatefrmAddtenkdv.invalid) {
      return;
    }
    else {
      const tem: QLCaiDatCongTo = <any>{};
      tem.id = this.kdvtem
      tem.dienLuc = this.f.dienLuc.value;
      tem.maCongTo = this.f.maCongTo.value;
      tem.ngay_Cai = this.f.ngay_Cai.value;
      tem.nguoiCai = this.f.nguoiCai.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.soTem = this.f.soTem.value;
      tem.maKim = this.f.maKim.value;
      tem.soLanCai = this.f.soLanCai.value;

      // tem.loaiTem_name = this.f.loaiTem_name.value;
      // tem.tenKDV_name = this.f.tenKDV_name.value;
      tem.ghiChu = this.f.ghiChu.value;
   
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


