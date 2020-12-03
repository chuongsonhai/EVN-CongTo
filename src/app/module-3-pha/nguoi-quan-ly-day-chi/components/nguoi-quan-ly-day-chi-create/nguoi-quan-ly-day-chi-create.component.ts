import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucDayChi, ITaiKhoan, INQLDayChi } from 'src/app/Interface/module';
import { DanhmucDaychiService } from 'src/app/module-3-pha/danhmuc-daychi/danhmuc-daychi.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { NguoiQuanLyDayChiService } from '../../nguoi-quan-ly-day-chi.service';

@Component({
  selector: 'app-nguoi-quan-ly-day-chi-create',
  templateUrl: './nguoi-quan-ly-day-chi-create.component.html',
  styleUrls: ['./nguoi-quan-ly-day-chi-create.component.scss']
})
export class NguoiQuanLyDayChiCreateComponent implements OnInit {
  message:string;
  action:string;
 
  frmAdddaychikdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucdaychi: IDanhMucDayChi[];
  danhmucdaychiobser: Observable<IDanhMucDayChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<NguoiQuanLyDayChiCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:INQLDayChi ,
    private Service: NguoiQuanLyDayChiService, private Servicedaychi: DanhmucDaychiService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.frmAdddaychikdv = new FormGroup({
      ngay_Cap_Phat: new FormControl(''),
      soLuong: new FormControl(''),
      daychi_ID: new FormControl(null),
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
      const tem: INQLDayChi = <any>{};
      tem.soLuong = this.f.soLuong.value;
      tem.ngay_Cap_Phat = this.f.ngay_Cap_Phat.value;
      tem.kdV_ID = this.f.kdV_ID.value;
      tem.daychi_ID = this.f.daychi_ID.value;
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