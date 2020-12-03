import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IKDVChi } from 'src/app/Interface/module';
import { KiemdinhvienchiService } from '../../kiemdinhvienchi.service';
import { KiemdinhvienchiCreateComponent } from '../kiemdinhvienchi-create/kiemdinhvienchi-create.component';
import { KiemdinhvienchiDeleteComponent } from '../kiemdinhvienchi-delete/kiemdinhvienchi-delete.component';
import { KiemdinhvienchiUpdateComponent } from '../kiemdinhvienchi-update/kiemdinhvienchi-update.component';

@Component({
  selector: 'app-kiemdinhvienchi-list',
  templateUrl: './kiemdinhvienchi-list.component.html',
  styleUrls: ['./kiemdinhvienchi-list.component.scss']
})
export class KiemdinhvienchiListComponent implements OnInit {


  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Su_Dung',  'tenKDV_name', 'loaiChi_name', 'soLuongChi', 'soLuongChi_Huy', 'actions',];
  dataSource: MatTableDataSource<IKDVChi>;
  departments: IKDVChi[];
  departmentOsv$: Observable<IKDVChi[]>;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private Service: KiemdinhvienchiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.departmentOsv$ = this.Service.GetAlldkvtem();
    this.preparationData();
  }
  // Su dung co che Merge Observiable de thuc hien
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<IKDVChi>(this.departments);
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
  public addNew(department: IKDVChi) {
    const dialogRef = this.dialog.open(KiemdinhvienchiCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(KiemdinhvienchiUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(KiemdinhvienchiDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}