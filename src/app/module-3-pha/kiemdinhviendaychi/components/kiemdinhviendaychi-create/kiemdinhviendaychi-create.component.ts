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
  selector: 'app-kiemdinhviendaychi-create',
  templateUrl: './kiemdinhviendaychi-create.component.html',
  styleUrls: ['./kiemdinhviendaychi-create.component.scss']
})
export class KiemdinhviendaychiCreateComponent implements OnInit {
  message:string;
  action:string;
  
  frmAdddaychikdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucdaychi: IDanhMucDayChi[];
  danhmucdaychiobser: Observable<IDanhMucDayChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KiemdinhviendaychiCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVDayChi,
    private Service: KiemdinhviendaychiService, private Servicedaychi: DanhmucDaychiService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.frmAdddaychikdv = new FormGroup({
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
  
  }

  get f() { return this.frmAdddaychikdv.controls; }
  confirmAdd() {
    if (this.frmAdddaychikdv.invalid) {
      return;
    }
    else {
      const chi: IKDVDayChi = <any>{};
      chi.soLuong = this.f.soLuong.value;
      chi.loaiDayChi_Huy = this.f.loaiDayChi_Huy.value;
      chi.ngay_Su_Dung = this.f.ngay_Su_Dung.value;
      chi.soLuong_Huy = this.f.soLuong_Huy.value;
      chi.kdV_ID = this.f.kdV_ID.value;
      chi.daychi_ID = this.f.daychi_ID.value;
      this.data = chi;
      this.Service.CreateKdv(chi).subscribe(val => 
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

