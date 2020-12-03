import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDangKiTemChi } from 'src/app/Interface/module';
import { DangkitemchiService } from '../../dangkitemchi.service';

@Component({
  selector: 'app-dangkitemchi-delete',
  templateUrl: './dangkitemchi-delete.component.html',
  styleUrls: ['./dangkitemchi-delete.component.scss']
})
export class DangkitemchiDeleteComponent implements OnInit {

  message:string;
  action:string;
  department: IDangKiTemChi = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<DangkitemchiDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: DangkitemchiService) {      this.message ="Thao Tác Thành Công";
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