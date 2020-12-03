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
  selector: 'app-kiemdinhvienchi-update',
  templateUrl: './kiemdinhvienchi-update.component.html',
  styleUrls: ['./kiemdinhvienchi-update.component.scss']
})
export class KiemdinhvienchiUpdateComponent implements OnInit {
  message:string;
  action:string;
  kdvchi: number;
  updatefrmAddtenkdv: FormGroup;
  danhmuctenKDV: ITaiKhoan[];
  danhmuctenKDVobser: Observable<ITaiKhoan[]>;
  danhmucchi: IDanhMucChi[];
  danhmucchiobser: Observable<IDanhMucChi[]>;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<KiemdinhvienchiUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IKDVChi,
    private Service: KiemdinhvienchiService, private Servicechi: DanhmucChiService, private Servicetenkdv: DanhmucTenKDVService,) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.updatefrmAddtenkdv = new FormGroup({
      ngay_Su_Dung: new FormControl(''),
      soLuongChi: new FormControl(''),
      soLuongChi_Huy: new FormControl(''),
      chi_ID: new FormControl(null),
      kdV_ID: new FormControl(null),
    });
    this.danhmuctenKDVobser = this.Servicetenkdv.GetAll();
    this.danhmuctenKDVobser.subscribe(val => { this.danhmuctenKDV = val; });
    this.danhmucchiobser = this.Servicechi.GetAll();
    this.danhmucchiobser.subscribe(val => { this.danhmucchi = val; });

    this.Service.GetdkvchiID(+this.data.id).subscribe(val => {
      this.kdvchi = val.id;
      this.f.soLuongChi.setValue (val.soLuongChi);
      this.f.soLuongChi_Huy.setValue (val.soLuongChi_Huy);
      this.f.kdV_ID.setValue (val.kdV_ID);
      this.f.chi_ID.setValue (val.chi_ID);
      this.f.ngay_Su_Dung.setValue (val.ngay_Su_Dung);
   })

  };
  get f() { return this.updatefrmAddtenkdv.controls; }

  confirmAdd() {
    if (this.updatefrmAddtenkdv.invalid) {
      return;
    }
    else {
      const chi: IKDVChi = <any>{};
      chi.id = this.kdvchi
      chi.ngay_Su_Dung = this.f.ngay_Su_Dung.value;
      chi.kdV_ID = this.f.kdV_ID.value;
      chi.chi_ID = this.f.chi_ID.value;
      chi.soLuongChi = this.f.soLuongChi.value;
      chi.soLuongChi_Huy = this.f.soLuongChi_Huy.value;
  

      this.data = chi;
      this.Service.Update(this.kdvchi,chi).subscribe(val =>
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
