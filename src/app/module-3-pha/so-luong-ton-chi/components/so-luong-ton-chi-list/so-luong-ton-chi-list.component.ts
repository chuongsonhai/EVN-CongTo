import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ISLTChi } from 'src/app/Interface/module';
import { SoLuongTonChiService } from '../../so-luong-ton-chi.service';
import { Observable, Subject, merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-so-luong-ton-chi-list',
  templateUrl: './so-luong-ton-chi-list.component.html',
  styleUrls: ['./so-luong-ton-chi-list.component.scss']
})
export class SoLuongTonChiListComponent implements OnInit {

  pageSize = 100;
  displayedColumns: string[] = ['no', 'ngay_Cap_Phat', 'soLuongChi', 'soLuongChi_Huy', 'soLuongChi_Ton'];
  dataSource: MatTableDataSource<ISLTChi>;
  departments: ISLTChi[];
  departmentOsv$: Observable<ISLTChi[]>;

  ngaycapphat: FormGroup;
  keywordChanged$ = new Subject();
  pickedDate: String;
  entries: ISLTChi[];
  isLoading = false;
  entriesCount: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private Service: SoLuongTonChiService, public form: FormBuilder) {
    
    this.ngaycapphat = new FormGroup({
      ngay_Cap_Phat: new FormControl('')
    });
  }
  get f() { return this.ngaycapphat.controls; }
  
  ngOnInit(): void {

    
  }
  private preparationData() {
    this.departmentOsv$.subscribe(
      val => {
        try {
          this.departments = val;
          this.dataSource = new MatTableDataSource<ISLTChi>(this.departments);
          this.dataSource.paginator = this.paginator;
          console.log(val);
        } catch (error) {
          console.log(error);
        }
      });
  }
  click() {
    merge(this.paginator.page, this.keywordChanged$)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading = true;
          const max_count = this.paginator.pageSize || this.pageSize;
          const skip_count = this.paginator.pageIndex * max_count;
          // const ngay_Cap_Phat = this.paginator.
          var pickeDate = this.f.ngay_Cap_Phat.value.toLocaleString();
          return this.Service.GetListSLTChi(skip_count, max_count, pickeDate);
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
      ).subscribe(data => this.entries = data);
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // get f() { return this.ngaycapphat.controls; }
  // confirmAdd() {
  //   if (this.ngaycapphat.invalid) {
  //     return;
  //   }
  //   else {
  //     const tem: ISLTChi = <any>{};

  //     tem.ngay_Cap_Phat = this.f.ngay_Cap_Phat.value;
  //     this.data = tem;
  //     this.Service.GetListSLTChi().subscribe(val =>
  //         console.log(val)
  //     );
  //   }
  // }

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