import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { INQLCHi } from 'src/app/Interface/module';
import { NguoiQuanLyChiService } from '../../nguoi-quan-ly-chi.service';
import { NguoiQuanLyChiCreateComponent } from '../nguoi-quan-ly-chi-create/nguoi-quan-ly-chi-create.component';
import { NguoiQuanLyChiDeleteComponent } from '../nguoi-quan-ly-chi-delete/nguoi-quan-ly-chi-delete.component';
import { NguoiQuanLyChiUpdateComponent } from '../nguoi-quan-ly-chi-update/nguoi-quan-ly-chi-update.component';

@Component({
  selector: 'app-nguoi-quan-ly-chi-list',
  templateUrl: './nguoi-quan-ly-chi-list.component.html',
  styleUrls: ['./nguoi-quan-ly-chi-list.component.scss']
})
export class NguoiQuanLyChiListComponent implements OnInit {
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat',  'tenKDV_name', 'loaiChi_name', 'soLuong', 'actions',];
  dataSource: MatTableDataSource<INQLCHi>;
  departments: INQLCHi[];
  departmentOsv$: Observable<INQLCHi[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: NguoiQuanLyChiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAllnqlchi();
    this.preparationData();
  }
  // Su dung co che Merge Observiable de thuc hien
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<INQLCHi>(this.departments);
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
  public addNew(department: INQLCHi) {
    const dialogRef = this.dialog.open(NguoiQuanLyChiCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyChiUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyChiDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}
