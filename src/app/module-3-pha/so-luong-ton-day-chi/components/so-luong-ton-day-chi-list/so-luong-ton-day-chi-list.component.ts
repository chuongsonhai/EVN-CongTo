import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ISLTDayChi } from 'src/app/Interface/module';
import { SoLuongTonDayChiService } from '../../so-luong-ton-day-chi.service';
import { Observable, Subject, merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-so-luong-ton-day-chi-list',
  templateUrl: './so-luong-ton-day-chi-list.component.html',
  styleUrls: ['./so-luong-ton-day-chi-list.component.scss']
})
export class SoLuongTonDayChiListComponent implements OnInit {


  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat',  'loaiDayChi_name', 'soLuongDayChi', 'soLuongDayChi_Huy','soLuongDayChi_Ton'];
  dataSource: MatTableDataSource<ISLTDayChi>;
  departments: ISLTDayChi[];
  departmentOsv$: Observable<ISLTDayChi[]>;

  keywordChanged$ = new Subject();
  pickedDate: String = new Date().toLocaleString();
  entries: ISLTDayChi[];
  isLoading = false;
  entriesCount: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: SoLuongTonDayChiService, ) { }

  ngOnInit(): void {
    merge(this.paginator.page, this.keywordChanged$)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        const max_count = this.paginator.pageSize || this.pageSize;
        const skip_count = this.paginator.pageIndex * max_count;
        return this.Service.GetListSLTDayChi(skip_count, max_count, this.pickedDate);
      }),
 map(data => {
  
        this.isLoading = false;
        this.entriesCount = data.total;
        return data.items;
      }),
      catchError(() => {
        this.isLoading = false;
        return of([]);
      })
    ).subscribe(data => this.entries = data);

  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<ISLTDayChi>(this.departments);
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
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
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
}
