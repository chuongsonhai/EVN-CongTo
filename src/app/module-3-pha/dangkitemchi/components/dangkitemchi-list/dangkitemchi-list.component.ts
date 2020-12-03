import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IDangKiTemChi } from 'src/app/Interface/module';
import { DangkitemchiService } from '../../dangkitemchi.service';
import { DangkitemchiCreateComponent } from '../dangkitemchi-create/dangkitemchi-create.component';
import { DangkitemchiDeleteComponent } from '../dangkitemchi-delete/dangkitemchi-delete.component';
import { DangkitemchiUpdateComponent } from '../dangkitemchi-update/dangkitemchi-update.component';

@Component({
  selector: 'app-dangkitemchi-list',
  templateUrl: './dangkitemchi-list.component.html',
  styleUrls: ['./dangkitemchi-list.component.scss']
})
export class DangkitemchiListComponent implements OnInit {
  // id_NguoiDKy: number,
  // nguoiDangKy_name: string,
  // nam: number,
  // ten_DKy: string,
  // soLuong_Dky: number,
  // id_NguoiDuyet: number,
  // nguoiDuyet_name: string,
  // trangThaiDuyet: number,
  // capDuyet: number,
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ten_DKy', 'soLuong_Dky','actions',];
  dataSource: MatTableDataSource<IDangKiTemChi>;
  departments: IDangKiTemChi[];
  departmentOsv$: Observable<IDangKiTemChi[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: DangkitemchiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAlldkvtem();
    this.departmentOsv$.subscribe(val => { this.departments = val});
   
    this.preparationData();
  }
  public preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<IDangKiTemChi>(this.departments);
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

  public refreshTable() {
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
  public addNew(department: IDangKiTemChi) {
    const dialogRef = this.dialog.open(DangkitemchiCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(DangkitemchiUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(DangkitemchiDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}
