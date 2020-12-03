import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { QLCaiDatCongTo } from 'src/app/Interface/module';
import { QLCaiDatCongToService } from '../../qlcai-dat-cong-to.service';
import { QLCaiDatCongToCreateComponent } from '../qlcai-dat-cong-to-create/qlcai-dat-cong-to-create.component';
import { QLCaiDatCongToDeleteComponent } from '../qlcai-dat-cong-to-delete/qlcai-dat-cong-to-delete.component';
import { QLCaiDatCongToUpdateComponent } from '../qlcai-dat-cong-to-update/qlcai-dat-cong-to-update.component';

@Component({
  selector: 'app-qlcai-dat-cong-to-list',
  templateUrl: './qlcai-dat-cong-to-list.component.html',
  styleUrls: ['./qlcai-dat-cong-to-list.component.scss']
})
export class QLCaiDatCongToListComponent implements OnInit {

  pageSize = 100;
  displayedColumns: string[] = ['no', 'dienLuc',  'maCongTo', 'ngay_Cai', 'maKDV_Name','nguoiCai_Name','soTem','maKim','soLanCai' ,'ghiChu','actions',];
  dataSource: MatTableDataSource<QLCaiDatCongTo>;
  departments: QLCaiDatCongTo[];
  departmentOsv$: Observable<QLCaiDatCongTo[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: QLCaiDatCongToService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAllnqlchi();
    this.preparationData();
  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<QLCaiDatCongTo>(this.departments);
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
  public addNew(department: QLCaiDatCongTo) {
    const dialogRef = this.dialog.open(QLCaiDatCongToCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(QLCaiDatCongToUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(QLCaiDatCongToDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}
