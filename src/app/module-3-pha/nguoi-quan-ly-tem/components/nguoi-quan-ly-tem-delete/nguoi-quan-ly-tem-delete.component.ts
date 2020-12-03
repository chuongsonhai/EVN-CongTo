import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { INQLTem } from 'src/app/Interface/module';
import { NguoiQuanLyTemService } from '../../nguoi-quan-ly-tem.service';

@Component({
  selector: 'app-nguoi-quan-ly-tem-delete',
  templateUrl: './nguoi-quan-ly-tem-delete.component.html',
  styleUrls: ['./nguoi-quan-ly-tem-delete.component.scss']
})
export class NguoiQuanLyTemDeleteComponent implements OnInit {

  message:string;
  action:string;
  department: INQLTem = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<NguoiQuanLyTemDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: NguoiQuanLyTemService) {       this.message ="Thao Tác Thành Công";
  this.action ='Thoát';}



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