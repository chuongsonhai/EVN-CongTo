import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { INQLTem } from 'src/app/Interface/module';
import { NguoiQuanLyTemService } from '../../nguoi-quan-ly-tem.service';
import { NguoiQuanLyTemCreateComponent } from '../nguoi-quan-ly-tem-create/nguoi-quan-ly-tem-create.component';
import { NguoiQuanLyTemDeleteComponent } from '../nguoi-quan-ly-tem-delete/nguoi-quan-ly-tem-delete.component';
import { NguoiQuanLyTemUpdateComponent } from '../nguoi-quan-ly-tem-update/nguoi-quan-ly-tem-update.component';

@Component({
  selector: 'app-nguoi-quan-ly-tem-list',
  templateUrl: './nguoi-quan-ly-tem-list.component.html',
  styleUrls: ['./nguoi-quan-ly-tem-list.component.scss']
})
export class NguoiQuanLyTemListComponent implements OnInit {


  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat',  'tenKDV_name', 'loaiTem_name', 'soLuong','seri_Cuoi' ,'seri_Dau','actions',];
  dataSource: MatTableDataSource<INQLTem>;
  departments: INQLTem[];
  departmentOsv$: Observable<INQLTem[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: NguoiQuanLyTemService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAllnqlchi();
    this.preparationData();
  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<INQLTem>(this.departments);
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
  public addNew(department: INQLTem) {
    const dialogRef = this.dialog.open(NguoiQuanLyTemCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyTemUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyTemDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}