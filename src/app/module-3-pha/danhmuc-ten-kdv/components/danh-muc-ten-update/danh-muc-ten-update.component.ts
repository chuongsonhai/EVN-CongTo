import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from '../../danhmuc-ten-kdv.service';

@Component({
  selector: 'app-danh-muc-ten-update',
  templateUrl: './danh-muc-ten-update.component.html',
  styleUrls: ['./danh-muc-ten-update.component.scss']
})
export class DanhMucTenUpdateComponent implements OnInit {
  message:string;
  action:string;
  
  frmAddtenkdv: FormGroup;
  id_ten : number
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DanhMucTenUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITaiKhoan, private Service: DanhmucTenKDVService) {      this.message ="Thao Tác Thành Công";
    this.action ='Thoát'; }

    ngOnInit(): void {
      this.frmAddtenkdv = this.formBuilder.group({
        tenDayDu: ['', Validators.required],
        laQuanLy: ['', Validators.required],
        maKDV: ['', Validators.required],
     
      });
      // get development data
      this.Service.GetTenKDVID(+this.data.id)
        .subscribe( val => {
          this.id_ten = val.id;
          this.f.tenDayDu.setValue(val.tenDayDu);
          this.f.laQuanLy.setValue(val.laQuanLy);
          this.f.maKDV.setValue(val.maKDV);
     
        });
    }
    get f() { return this.frmAddtenkdv.controls; }
  
    //update data
    confirmUpdate() {
      // stop here if form is invalid
     if (this.frmAddtenkdv.invalid) {
       return;
     } else {
       const department: ITaiKhoan = <any>{};
       department.id = this.id_ten;
       department.tenDayDu = this.f.tenDayDu.value;
       department.laQuanLy = this.f.laQuanLy.value; 
       department.maKDV = this.f.maKDV.value; 

       this.Service.Update(this.id_ten, department).subscribe(
         val =>   
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

