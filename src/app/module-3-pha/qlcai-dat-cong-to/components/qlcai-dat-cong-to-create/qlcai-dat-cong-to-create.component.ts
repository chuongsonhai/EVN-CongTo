import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ITaiKhoan, QLCaiDatCongTo } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from 'src/app/module-3-pha/danhmuc-ten-kdv/danhmuc-ten-kdv.service';
import { QLCaiDatCongToService } from '../../qlcai-dat-cong-to.service';

@Component({
  selector: 'app-qlcai-dat-cong-to-create',
  templateUrl: './qlcai-dat-cong-to-create.component.html',
  styleUrls: ['./qlcai-dat-cong-to-create.component.scss']
})
export class QLCaiDatCongToCreateComponent implements OnInit {
  message:string;
  action:string;
 
  dataSource: MatTableDataSource<QLCaiDatCongTo>;
  departmentss: QLCaiDatCongTo[];
  departmentOsvss$: Observable<QLCaiDatCongTo[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  public createform: FormGroup;
  public departmentsObs$: Observable<ITaiKhoan[]>;
  public departments: ITaiKhoan[] = [];
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<QLCaiDatCongToCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QLCaiDatCongTo,
    private deparmentService: DanhmucTenKDVService,private Service: QLCaiDatCongToService, private employeeService:QLCaiDatCongToService ) {
      this.message ="Thao Tác Thành Công";
      this.action ='Thoát';
  }
  ngOnInit(): void {
    this.createform = new FormGroup({
      dienLuc: new FormControl(''),
      maCongTo: new FormControl(''),
      ngay_Cai: new FormControl(''),
      nguoiCai: new FormControl(null),
      kdV_ID: new FormControl(null),
      soTem: new FormControl(''),
      maKim: new FormControl(''),
      soLanCai: new FormControl(''),
      ghiChu: new FormControl(''),
    


    });
    this.departmentsObs$ = this.deparmentService.GetAll();
    this.departmentsObs$.subscribe(val => {
      this.departments = val;
    });
    this.departmentOsvss$ = this.Service.GetAllnqlchi();
    this.departmentOsvss$.subscribe(val =>{
      this.departmentss =val;
    })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  get f() { return this.createform.controls; }
  confirmAdd() {
    if (this.createform.invalid) {
      return;
    } else {
      const emp: QLCaiDatCongTo = <any>{};
      emp.dienLuc = this.f.dienLuc.value;
      emp.maCongTo = this.f.maCongTo.value;
      emp.ngay_Cai = this.f.ngay_Cai.value;
      emp.kdV_ID = this.f.kdV_ID.value;
      emp.nguoiCai = this.f.nguoiCai.value;
      emp.soTem = this.f.soTem.value;
      emp.maKim = this.f.maKim.value;
      emp.soLanCai = this.f.soLanCai.value;
      emp.ghiChu = this.f.ghiChu.value;
      this.data = emp;

      // id: number,
      // dienLuc: string,
      // maCongTo: string,
      // ngay_Cai: Date,
      // kdV_ID?: number,
      // maKDV_Name: string,
      // nguoiCai?: number,
      // nguoiCai_Name: string,
      // soTem: string,
      // maKim: string,
      // soLanCai?: number,
      // ghiChu: string
      this.employeeService.Createnql(emp).subscribe(
        val => 
            console.log(val)

      );this.openSnackBarok(this.message,this.action)
    }
  }
  openSnackBarok(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
 
}
