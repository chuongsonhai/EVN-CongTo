import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IKDVTem } from 'src/app/Interface/module';
import { KiemdinhvienTemService } from '../../kiemdinhvien-tem.service';

@Component({
  selector: 'app-kdv-tem-delete',
  templateUrl: './kdv-tem-delete.component.html',
  styleUrls: ['./kdv-tem-delete.component.scss']
})
export class KDVTemDeleteComponent implements OnInit {
  message:string;
  action:string;
  department: IKDVTem = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<KDVTemDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: KiemdinhvienTemService) {      this.message ="Thao Tác Thành Công";
  this.action ='Thoát'; }



  ngOnInit(): void {
    this.Service.GetdkvtemID(this.data.id)
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