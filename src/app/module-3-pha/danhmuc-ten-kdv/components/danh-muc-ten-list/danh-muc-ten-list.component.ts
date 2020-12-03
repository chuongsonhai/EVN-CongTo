import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { ITaiKhoan } from 'src/app/Interface/module';
import { DanhmucTenKDVService } from '../../danhmuc-ten-kdv.service';
import { DanhMucTenCreateComponent } from '../danh-muc-ten-create/danh-muc-ten-create.component';
import { DanhMucTenDeleteComponent } from '../danh-muc-ten-delete/danh-muc-ten-delete.component';
import { DanhMucTenUpdateComponent } from '../danh-muc-ten-update/danh-muc-ten-update.component';

@Component({
  selector: 'app-danh-muc-ten-list',
  templateUrl: './danh-muc-ten-list.component.html',
  styleUrls: ['./danh-muc-ten-list.component.scss']
})
export class DanhMucTenListComponent implements OnInit {
  pageSize = 5;
  displayedColumns: string[] = ['1','tenDayDu','maKDV','laQuanLy', 'actions'];
  dataSource: MatTableDataSource<ITaiKhoan>;
  departments: ITaiKhoan[];
  departmentOsv$: Observable<ITaiKhoan[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private Service: DanhmucTenKDVService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAll();
    this.preparationData();
  }
  // Su dung co che Merge Observiable de thuc hien
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<ITaiKhoan>(this.departments);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(val);
        } catch (error) {
          console.log(error);
        }
      });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private refreshTable() {
    this.preparationData();
    // if there's a paginator active we're using it for refresh
    if (this.dataSource.paginator.hasNextPage()) {
      this.dataSource.paginator.nextPage();
      this.dataSource.paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource.paginator.hasPreviousPage()) {
      this.dataSource.paginator.previousPage();
      this.dataSource.paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = ''; // filler
    }
  }
  // Add new data
  public addNew(department: ITaiKhoan) {
    const dialogRef = this.dialog.open(DanhMucTenCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }
    
  public startEdit(id: number) {
    const dialogRef = this.dialog.open(DanhMucTenUpdateComponent,{data:{id}});
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1 ){
       this.refreshTable();
      }
    })
   }

 public deleteItem(id: number) { 
  const dialogRef = this.dialog.open(DanhMucTenDeleteComponent, {data : {id}});
  dialogRef.afterClosed().subscribe(val => {
    if (val === 1 ){
     this.refreshTable();
    }
  })
}
    ;
  }

