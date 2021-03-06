import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { INQLDayChi } from 'src/app/Interface/module';
import { NguoiQuanLyDayChiService } from '../../nguoi-quan-ly-day-chi.service';
import { NguoiQuanLyDayChiCreateComponent } from '../nguoi-quan-ly-day-chi-create/nguoi-quan-ly-day-chi-create.component';
import { NguoiQuanLyDayChiDeleteComponent } from '../nguoi-quan-ly-day-chi-delete/nguoi-quan-ly-day-chi-delete.component';
import { NguoiQuanLyDayChiUpdateComponent } from '../nguoi-quan-ly-day-chi-update/nguoi-quan-ly-day-chi-update.component';

@Component({
  selector: 'app-nguoi-quan-ly-day-chi-list',
  templateUrl: './nguoi-quan-ly-day-chi-list.component.html',
  styleUrls: ['./nguoi-quan-ly-day-chi-list.component.scss']
})
export class NguoiQuanLyDayChiListComponent implements OnInit {
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat',  'tenKDV_name', 'loaiDayChi_name', 'soLuong', 'actions',];
  dataSource: MatTableDataSource<INQLDayChi>;
  departments: INQLDayChi[];
  departmentOsv$: Observable<INQLDayChi[]>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: NguoiQuanLyDayChiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAllnqlchi();
    this.preparationData();
  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<INQLDayChi>(this.departments);
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
  public addNew(department: INQLDayChi) {
    const dialogRef = this.dialog.open(NguoiQuanLyDayChiCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyDayChiUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(NguoiQuanLyDayChiDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}