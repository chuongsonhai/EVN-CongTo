import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { merge, Observable, of, Subject } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {  ISLTTem } from 'src/app/Interface/module';
import { SoLuongTonTemService } from '../../so-luong-ton-tem.service';

@Component({
  selector: 'app-so-luong-ton-tem-list',
  templateUrl: './so-luong-ton-tem-list.component.html',
  styleUrls: ['./so-luong-ton-tem-list.component.scss']
})
export class SoLuongTonTemListComponent implements OnInit {
  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat',  'loaiTem_name', 'soLuongTem', 'soLuongTem_Huy','soLuongTem_Ton'];
  dataSource: MatTableDataSource<ISLTTem>;
  departments: ISLTTem[];
  departmentOsv$: Observable<ISLTTem[]>;

  keywordChanged$ = new Subject();
  pickedDate: String = new Date().toLocaleString();
  entries: ISLTTem[];
  isLoading = false;
  entriesCount: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: SoLuongTonTemService, private datePipe: DatePipe ) { }

  ngOnInit(): void {
    // this.departmentOsv$ = this.Service.GetListSLTChi();
    // this.preparationData();

    
        merge(this.paginator.page, this.keywordChanged$)
          .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoading = true;
              const max_count = this.paginator.pageSize || this.pageSize;
              const skip_count = this.paginator.pageIndex * max_count;
              return this.Service.GetListSLTChi(skip_count, max_count, this.pickedDate);
            }),
       map(data => {
              // Flip flag to show that loading has finished.
              this.isLoading = false;
              this.entriesCount = data.total;
              return data.items;
            }),
            catchError(() => {
              this.isLoading = false;
              return of([]);
            })
          ).subscribe(data => {
            try{ 
              this.entries = data ,console.log(data)
            }
            catch (error) {
            console.log(error);
          }
        });
  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<ISLTTem>(this.departments);
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
}