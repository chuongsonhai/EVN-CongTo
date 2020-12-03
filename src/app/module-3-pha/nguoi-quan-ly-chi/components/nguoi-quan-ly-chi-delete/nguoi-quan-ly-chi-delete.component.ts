import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INQLCHi } from 'src/app/Interface/module';
import { NguoiQuanLyChiService } from '../../nguoi-quan-ly-chi.service';

@Component({
  selector: 'app-nguoi-quan-ly-chi-delete',
  templateUrl: './nguoi-quan-ly-chi-delete.component.html',
  styleUrls: ['./nguoi-quan-ly-chi-delete.component.scss']
})
export class NguoiQuanLyChiDeleteComponent implements OnInit {
  message:string;
  action:string;
  department: INQLCHi = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<NguoiQuanLyChiDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: NguoiQuanLyChiService) {      this.message ="Thao Tác Thành Công";
  this.action ='Thoát'; }



  ngOnInit(): void {
    this.Service.GetnqlchiID(this.data.id)
    .subscribe(val => {
      this.department = val;
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
  openSnackBarok(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}