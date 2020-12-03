import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IKDVChi } from 'src/app/Interface/module';
import { KiemdinhvienchiService } from '../../kiemdinhvienchi.service';

@Component({
  selector: 'app-kiemdinhvienchi-delete',
  templateUrl: './kiemdinhvienchi-delete.component.html',
  styleUrls: ['./kiemdinhvienchi-delete.component.scss']
})
export class KiemdinhvienchiDeleteComponent implements OnInit {
  message:string;
  action:string;
  department: IKDVChi = <any>{};
  constructor( private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<KiemdinhvienchiDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: KiemdinhvienchiService) {       this.message ="Thao Tác Thành Công";
  this.action ='Thoát';}



  ngOnInit(): void {
    this.Service.GetdkvchiID(this.data.id)
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