import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IKDVTem } from 'src/app/Interface/module';
import { KiemdinhvienTemService } from '../../kiemdinhvien-tem.service';
import { KDVTemCreateComponent } from '../kdv-tem-create/kdv-tem-create.component';
import { KDVTemDeleteComponent } from '../kdv-tem-delete/kdv-tem-delete.component';
import { KDVTemUpdateComponent } from '../kdv-tem-update/kdv-tem-update.component';

@Component({
  selector: 'app-kdv-tem-list',
  templateUrl: './kdv-tem-list.component.html',
  styleUrls: ['./kdv-tem-list.component.scss']
})
export class KDVTemListComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
 
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Su_Dung', 'soLuong', 'tenKDV_name', 'loaiTem_name', 'seri_Dau', 'seri_Cuoi', 'soLuong_Huy', 'seri_Tem_Huy', 'actions',];
  dataSource: MatTableDataSource<IKDVTem>;
  departments: IKDVTem[];
  departmentOsv$: Observable<IKDVTem[]>;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private departmentService: KiemdinhvienTemService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.departmentService.GetAlldkvtem();
    this.preparationData();
  }
  // Su dung co che Merge Observiable de thuc hien
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<IKDVTem>(this.departments);
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
  public addNew(department: IKDVTem) {
    const dialogRef = this.dialog.open(KDVTemCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(KDVTemUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(KDVTemDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}