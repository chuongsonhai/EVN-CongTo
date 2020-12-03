import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IDanhMucTem, ISubstationDetailDialogCloseResult, ISubstationDetailDialogData } from 'src/app/Interface/module';
import { DanhmucTemService } from '../../danhmuc-tem.service';

@Component({
  selector: 'app-danhmuc-tem-detail-dialog',
  templateUrl: './danhmuc-tem-detail-dialog.component.html',
  styleUrls: ['./danhmuc-tem-detail-dialog.component.scss']
})
export class DanhmucTemDetailDialogComponent implements OnInit {

  id: number;
  entry: IDanhMucTem;
  error: string;
  IsNew: boolean;
  IsLoading: boolean;
  IsSaving: boolean;
  theForm: FormGroup;

  constructor(
    private _service: DanhmucTemService,
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<DanhmucTemDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISubstationDetailDialogData) {
    this.theForm = this._fb.group({
      id: [0],
      ma_Tem: [''],
      loai_Tem:[''],
    });
    this.initData();
  }

  private createNew(): IDanhMucTem {
    return {
      id: 0,
      ma_Tem: '',
      loai_Tem:'',
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
    let save_action: (entry: IDanhMucTem) => Observable<any>;
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
