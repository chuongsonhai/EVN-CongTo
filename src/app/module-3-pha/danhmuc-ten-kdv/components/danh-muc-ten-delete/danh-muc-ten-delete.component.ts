import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from '../../danhmuc-ten-kdv.service';

@Component({
  selector: 'app-danh-muc-ten-delete',
  templateUrl: './danh-muc-ten-delete.component.html',
  styleUrls: ['./danh-muc-ten-delete.component.scss']
})
export class DanhMucTenDeleteComponent implements OnInit {
  message:string;
  action: string;
  duration: number;
    khachhang: ITaiKhoan = <any>{};
    constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<DanhMucTenDeleteComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private Service: DanhmucTenKDVService) {
        this.message = " thành công",
        this.action = " xóa"
       }
  
    ngOnInit(): void {
      this.Service.GetTenKDVID(this.data.id)
      .subscribe(val => {
        this.khachhang = val;
        console.log(val);
      });
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
    confirmDelete(): void {
      this.Service.Delete(this.data.id).subscribe(
        val => console.log(val)     
      );this.openSnackBarok(this.message,this.action)
    }
  //   openSnackBar(message: string, action: string) {
  //     this._snackBar.open(message, action, {
  //       duration: 2000,
  //     });
  // }
  openSnackBarok(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  }
