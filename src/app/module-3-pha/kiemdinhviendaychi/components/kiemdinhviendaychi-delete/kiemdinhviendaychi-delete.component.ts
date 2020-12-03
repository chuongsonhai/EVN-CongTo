import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IKDVDayChi } from 'src/app/Interface/module';
import { KiemdinhviendaychiService } from '../../kiemdinhviendaychi.service';

@Component({
  selector: 'app-kiemdinhviendaychi-delete',
  templateUrl: './kiemdinhviendaychi-delete.component.html',
  styleUrls: ['./kiemdinhviendaychi-delete.component.scss']
})
export class KiemdinhviendaychiDeleteComponent implements OnInit {
  message:string;
  action:string;
  
  department: IKDVDayChi = <any>{};
  constructor(  private _snackBar: MatSnackBar,public dialogRef: MatDialogRef<KiemdinhviendaychiDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private Service: KiemdinhviendaychiService) {       this.message ="Thao Tác Thành Công";
  this.action ='Thoát';}



  ngOnInit(): void {
    this.Service.GetdkvdaychiID(this.data.id)
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