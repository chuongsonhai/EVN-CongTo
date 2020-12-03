import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QLCaiDatCongTo } from 'src/app/Interface/module';
import { QLCaiDatCongToService } from '../../qlcai-dat-cong-to.service';

@Component({
  selector: 'app-qlcai-dat-cong-to-delete',
  templateUrl: './qlcai-dat-cong-to-delete.component.html',
  styleUrls: ['./qlcai-dat-cong-to-delete.component.scss']
})
export class QLCaiDatCongToDeleteComponent implements OnInit {
  message:string;
  action:string;
  department: QLCaiDatCongTo = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<QLCaiDatCongToDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: QLCaiDatCongToService) {       this.message ="Thao Tác Thành Công";
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