import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, of, Subject } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { IDanhMucDayChi, ISubstationDetailDialogCloseResult, ISubstationDetailDialogData } from 'src/app/Interface/module';
import { DanhmucDaychiService } from '../../danhmuc-daychi.service';
import { DanhmucDaychiDetailDialogComponent } from '../danhmuc-daychi-detail-dialog/danhmuc-daychi-detail-dialog.component';
declare type GroupKeys = keyof (IDanhMucDayChi) | 'actions' | 'no';
@Component({
  selector: 'app-danhmuc-daychi-list',
  templateUrl: './danhmuc-daychi-list.component.html',
  styleUrls: ['./danhmuc-daychi-list.component.scss']
})
export class DanhmucDaychiListComponent implements OnInit {
  id: number;
  displayedColumns: GroupKeys[] = ['no', 'ma_DayChi', 'loai_DayChi','actions'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  keywordChanged$ = new Subject();
   keyWord: string = '';
    entries: IDanhMucDayChi[];
  isLoading = false;
  pageSize = 5;
  entriesCount: number;

  constructor(
    private _service: DanhmucDaychiService,
    private _route: ActivatedRoute,
    private _router: Router,
    private dialog: MatDialog) {
    }
      ngOnInit(): void {

        // If the user changes the sort order, reset back to the first page.
        merge(this.sort.sortChange, this.keywordChanged$)
          .subscribe(() => this.paginator.pageIndex = 0);
    
        merge(this.sort.sortChange, this.paginator.page, this.keywordChanged$)
          .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoading = true;
              const max_count = this.paginator.pageSize || this.pageSize;
              const skip_count = this.paginator.pageIndex * max_count;
              const sort_by = this.sort.active;
              const asc_sorting = this.sort.direction == 'asc';
              return this._service.getList(skip_count, max_count, sort_by, asc_sorting, this.keyWord);
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
    
      create() {
        this.openEdit({ id: 0 });
      }
    
      applyFilter(event: Event) {
        this.keyWord = (event.target as HTMLInputElement).value || '';
        this.keywordChanged$.next();
      }
    
      edit(entry: IDanhMucDayChi) {
        // this._router.navigate([entry.id],{relativeTo:this._route});
        this.openEdit({ id: entry.id });
      }
    
      private openEdit(data: ISubstationDetailDialogData) {
        const dialog_ref = this.dialog.open(DanhmucDaychiDetailDialogComponent, {
         
          data
        });
        dialog_ref.afterClosed().subscribe((result: ISubstationDetailDialogCloseResult) => {
          if (result.saved) {
            this.keywordChanged$.next();
          }
        });
      }
    
      delete(entry: IDanhMucDayChi) {
        this._service.remove(entry.id)
          .subscribe(() => {
            this.keywordChanged$.next();
          }, reason => {
            console.log(reason);
          });
      }
    
}
