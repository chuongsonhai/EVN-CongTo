import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IKDVDayChi } from 'src/app/Interface/module';
import { KiemdinhviendaychiService } from '../../kiemdinhviendaychi.service';
import { KiemdinhviendaychiCreateComponent } from '../kiemdinhviendaychi-create/kiemdinhviendaychi-create.component';
import { KiemdinhviendaychiDeleteComponent } from '../kiemdinhviendaychi-delete/kiemdinhviendaychi-delete.component';
import { KiemdinhviendaychiUpdateComponent } from '../kiemdinhviendaychi-update/kiemdinhviendaychi-update.component';

@Component({
  selector: 'app-kiemdinhviendaychi-list',
  templateUrl: './kiemdinhviendaychi-list.component.html',
  styleUrls: ['./kiemdinhviendaychi-list.component.scss']
})
export class KiemdinhviendaychiListComponent implements OnInit {


  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Su_Dung','tenKDV_name','loaiDayChi_name','loaiDayChi_Huy','soLuong','soLuong_Huy', 'actions',];
  dataSource: MatTableDataSource<IKDVDayChi>;
  departments: IKDVDayChi[];
  departmentOsv$: Observable<IKDVDayChi[]>;


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private Service: KiemdinhviendaychiService, public dialog: MatDialog) { }

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
          this.dataSource = new MatTableDataSource<IKDVDayChi>(this.departments);
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
  public addNew(department: IKDVDayChi) {
    const dialogRef = this.dialog.open(KiemdinhviendaychiCreateComponent, {
      data: { department: department }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshTable();
      }
    });
  }

  public startEdit(id: number) {
    const dialogRef = this.dialog.open(KiemdinhviendaychiUpdateComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }

  public deleteItem(id: number) {
    const dialogRef = this.dialog.open(KiemdinhviendaychiDeleteComponent, { data: { id } });
    dialogRef.afterClosed().subscribe(val => {
      if (val === 1) {
        this.refreshTable();
      }
    })
  }
  ;
}