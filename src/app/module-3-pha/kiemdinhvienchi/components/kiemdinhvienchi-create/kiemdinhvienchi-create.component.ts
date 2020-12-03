import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDanhMucChi, ITaiKhoan, IKDVChi } from 'src/app/Interface/module';
import { DanhmucChiService } from 'src/app/module-3-pha/danhmuc-chi/danhmuc-chi.service';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { KiemdinhvienchiService } from '../../kiemdinhvienchi.service';

@Component({
  selector: 'app-kiemdinhvienchi-create',
  templateUrl: './kiemdinhvienchi-create.component.html',
  styleUrls: ['./kiemdinhvienchi-create.component.scss']
})
export class KiemdinhvienchiCreateComponent implements OnInit {
  message:string;
  action:string;
  frmAddchikdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucchi: IDanhMucChi[];
  danhmucchiobser: Observable<IDanhMucChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KiemdinhvienchiCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVChi,
    private Service: KiemdinhvienchiService, private Servicechi: DanhmucChiService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.frmAddchikdv = new FormGroup({
      ngay_Su_Dung: new FormControl(''),
      soLuongChi_Huy: new FormControl(''),
      soLuongChi: new FormControl(''),
      chi_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucchiobser = this.Servicechi.GetAll();
    this.danhmucchiobser.subscribe(val => { this.danhmucchi = val; });
  }

  get f() { return this.frmAddchikdv.controls; }

  confirmAdd() {
    if (this.frmAddchikdv.invalid) {
      return;
    }
    else {
      const chi: IKDVChi = <any>{};
      chi.soLuongChi = this.f.soLuongChi.value;
      chi.soLuongChi_Huy = this.f.soLuongChi_Huy.value;
      chi.ngay_Su_Dung = this.f.ngay_Su_Dung.value;
      chi.kdV_ID = this.f.kdV_ID.value;
      chi.chi_ID = this.f.chi_ID.value;
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
