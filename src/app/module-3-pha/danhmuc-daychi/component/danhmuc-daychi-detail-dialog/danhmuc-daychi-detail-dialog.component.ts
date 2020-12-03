import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IDanhMucDayChi} from 'src/app/Interface/module';
import { DanhmucDaychiService } from '../../danhmuc-daychi.service';
export interface ISubstationDetailDialogData {
  id?: number
}

export interface ISubstationDetailDialogCloseResult {
  saved?: boolean;
  canceled?: boolean;
}
@Component({
  selector: 'app-danhmuc-daychi-detail-dialog',
  templateUrl: './danhmuc-daychi-detail-dialog.component.html',
  styleUrls: ['./danhmuc-daychi-detail-dialog.component.scss']
})
export class DanhmucDaychiDetailDialogComponent implements OnInit {


  id: number;
  entry: IDanhMucDayChi;
  error: string;
  IsNew: boolean;
  IsLoading: boolean;
  IsSaving: boolean;
  theForm: FormGroup;




  constructor(
    private _service: DanhmucDaychiService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<DanhmucDaychiDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISubstationDetailDialogData) {
    this.theForm = this._fb.group({
      id: [0],
      ma_DayChi: [''],
      loai_DayChi:[''],
    });
    this.initData();
  }

  private createNew(): IDanhMucDayChi {
    return {
      id: 0,
      ma_DayChi: '',
      loai_DayChi:'',
    };
  }

  fetchData() {
    if (!this.IsLoading) {
      this.IsLoading = true;
      this._service.getDetail(this.id).subscribe(
        result => {
          this.entry = result;
          this.theForm.patchValue(this.entry);
          this.IsLoading = false;
        }, reason => {
          this.error = reason.toString();
          this.IsLoading = false;
        }
      );
    }
  }

  ngOnInit(): void {
 
  }

  initData() {
    const id = this.data.id;
    if(!isNaN(id) && id>0) {
      this.IsNew = false;
      this.id = id
      this.fetchData();
    } else {
      this.IsNew = true;
      this.id = 0;
      this.entry = this.createNew();
      this.theForm.patchValue(this.entry);
    }
  }

  close(data: ISubstationDetailDialogCloseResult) {
    this.dialogRef.close(data);
  }
  cancel() {
    this.close({canceled: true});
  }

  save() {
    const data = this.theForm.value;
    this.IsSaving = true;
    let save_action: (entry: IDanhMucDayChi) => Observable<any>;
    if (this.IsNew) {
      save_action = this._service.create.bind(this._service);
    } else {
      save_action = this._service.update.bind(this._service);
    }
    save_action(data).subscribe(() => {
      this.IsSaving = false;
      this.close({saved: true})
    }, reason => {
      this.IsSaving = false;
      this.error = reason.toString();
    });

  }

}
