import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDanhMucChi } from 'src/app/Interface/module';
import { DanhmucChiService } from '../../danhmuc-chi.service';

@Component({
  selector: 'app-danhmuc-chi-detail',
  templateUrl: './danhmuc-chi-detail.component.html',
  styleUrls: ['./danhmuc-chi-detail.component.scss']
})
export class DanhmucChiDetailComponent implements OnInit {

  id: number;
  entry: IDanhMucChi;
  error: string;
  IsNew: boolean;
  IsLoading: boolean;
  IsSaving: boolean;
  theForm: FormGroup;

  
  constructor(private _service: DanhmucChiService, private _route: ActivatedRoute,
    private _router: Router, private _fb: FormBuilder) {
    this.theForm = this._fb.group({
      id: [0],
      ma_Chi: [''],
      loai_Chi:[''],
    });
  }

  private createNew(): IDanhMucChi {
    return {
      id: 0,
      ma_Chi: '',
      loai_Chi: '',
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

    this._route.paramMap.subscribe(params => {
      const id = +params.get('id');

      if (!isNaN(id) && id > 0) {
        this.IsNew = false;
        this.id = id;
        this.fetchData();
      } else {
        this.IsNew = true;
        this.id = 0;
        this.entry = this.createNew();
        this.theForm.patchValue(this.entry);
      }
    })
  }

  cancel() {
    this._router.navigate(['..'], { relativeTo: this._route });
  }

  save() {
    const data = this.theForm.value;
    this.IsSaving = true;
    let save_action: (entry: IDanhMucChi) => Observable<any>;
    if (this.IsNew) {
      save_action = this._service.create.bind(this._service);
    } else {
      save_action = this._service.update.bind(this._service);
    }
    save_action(data).subscribe(() => {
      this.IsSaving = false;
      this._router.navigate(['..'], { relativeTo: this._route });
    }, reason => {
      this.IsSaving = false;
      this.error = reason.toString();
    });

  }
}
