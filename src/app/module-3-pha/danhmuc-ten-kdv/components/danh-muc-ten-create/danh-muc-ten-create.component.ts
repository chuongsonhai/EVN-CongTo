import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from '../../danhmuc-ten-kdv.service';

@Component({
  selector: 'app-danh-muc-ten-create',
  templateUrl: './danh-muc-ten-create.component.html',
  styleUrls: ['./danh-muc-ten-create.component.scss']
})
export class DanhMucTenCreateComponent implements OnInit {
  message:string;
  action:string;
  frmAddDepartment: FormGroup;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<DanhMucTenCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITaiKhoan, private Service: DanhmucTenKDVService) {      this.message ="Thao Tác Thành Công";
    this.action ='Thoát'; }


  ngOnInit(): void {
    this.frmAddDepartment = this.formBuilder.group({
      tenDayDu : ['', Validators.required],
      laQuanLy: ['', Validators.required],
      maKDV: ['', Validators.required]
    });

  }

  get f() { return this.frmAddDepartment.controls; }
  confirmAdd() {
    if (this.frmAddDepartment.invalid) {
      return;
    } else {
      const department: ITaiKhoan = <any>{};
      department.tenDayDu = this.f.tenDayDu.value;
      department.laQuanLy = this.f.laQuanLy.value;
      department.maKDV = this.f.maKDV.value;
      this.data = department;
      this.Service.Create(department).subscribe(
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

