export interface IDanhMucChi {
    id: number;
    ma_Chi: string;
    loai_Chi: string;
}

export interface IDanhMucTem {
    id: number;
    ma_Tem: string;
    loai_Tem: string
}

export interface IDanhMucDayChi {
    id: number;
    ma_DayChi: string;
    loai_DayChi: string;
}

export interface ITaiKhoan {
    id: number,
    tenDayDu: string,
    tenDangNhap: string,
    cmiS_User_ID: string,
    laQuanLy?:number,
    matKhau:string,
    maKDV:string,
}

export interface IKDVTem {
    id: number;
    ngay_Su_Dung: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    tem_ID?: number;
    loaiTem_name?: string;
    seri_Dau: string;
    seri_Cuoi: string;
    soLuong_Huy?: number;
    seri_Tem_Huy: string;
    soLuong?: number;
}

export interface IKDVChi {
    id: number;
    ngay_Su_Dung: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    chi_ID?: number;
    loaiChi_name?: string;
    soLuongChi?: number;
    soLuongChi_Huy?: number;

}


export interface IKDVDayChi {
    id: number;
    ngay_Su_Dung: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    daychi_ID?: number;
    loaiDayChi_name?: string;
    loaiDayChi_Huy: string;
    soLuong_Huy?: number; 
      soLuong?: number;
}
export interface INQLCHi{
    id: number;
    ngay_Cap_Phat: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    nqL_ID?:number;
    chi_ID?: number;
    loaiChi_name?: string;
    soLuong?: number;
}


export interface INQLDayChi{
    id: number;
    ngay_Cap_Phat: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    nqL_ID?:number;
    daychi_ID?: number;
    loaiDayChi_name?: string;
    soLuong?: number;
}


export interface INQLTem{
    id: number;
    ngay_Cap_Phat: Date;
    kdV_ID?: number;
    tenKDV_name?: string;
    tem_ID?: number;
    loaiTem_name?: string;
    nqL_ID?:number;
    seri_Dau: string;
    seri_Cuoi: string;
    soLuong?: number;
}


export interface ISLTTem{
    id: number,
    ngay_Cap_Phat: Date,
    tem_ID?: number,
    loaiTem_name: string,
    kdV_ID: string,
    soLuongTem?: number,
    soLuongTem_Huy?: number,
    soLuongTem_Ton?: number,
}


export interface ISLTChi{
    id: number,
    ngay_Cap_Phat: Date,
    chi_ID?: number,
    loaiChi_name: string,
    kdV_ID: string,
    soLuongChi?: number,
    soLuongChi_Huy?: number,
    soLuongChi_Ton?: number,
}


export interface ISLTDayChi{
    id: number,
    ngay_Cap_Phat: Date,
    daychi_ID?: number,
    kdV_ID: string,
    loaiDayChi_name: string,
    soLuongDayChi?: number,
    soLuongDayChi_Huy?: number,
    soLuongDayChi_Ton?: number,
}

export interface QLCaiDatCongTo{
    id: number,
    dienLuc: string,
    maCongTo: string,
    ngay_Cai: Date,
    kdV_ID?: number,
    maKDV_Name: string,
    nguoiCai?: number,
    nguoiCai_Name: string,
    soTem: string,
    maKim: string,
    soLanCai?: number,
    ghiChu: string
}
export interface IDangKiTemChi{
    id: number,
    id_NguoiDKy?: number,
    nguoiDangKy_name: string,
    nam?: number,
    ten_DKy: string,
    soLuong_Dky?: number,
    id_NguoiDuyet?: number,
    nguoiDuyet_name: string,
    trangThaiDuyet?: number,
    capDuyet?: number,
    thoiGianDuyet:Date
}









export interface IPagingQueryResult<T> {
    items: T[];
    total: number;
}

export const API_PATHS = {
    danhmucChi: '/api/DM_Chi',
    danhmucDayChi: '/api/DM_DayChi',
    danhmucTenKDV: '​/api/DM_Ten_KDV',
    danhmucTem: '/api/DM_Tem',
    KiemDinhVien_Chi: '/api/KDV_Chi',
    KiemDinhVien_DayChi: '/api/KDV_DayChi',
    KiemDinhVien_Tem: '/api/KDV_Tem',
    // SoLuongTon: '/api/SLT_Tem',
    SoLuongTonChi: '/api/SLT_Chi',
    SoLuongDayChi: '/api/SLT_DayChi',
    soLuongTem: '/api/SLT_Tem'
}


export interface ISubstationDetailDialogData {
    id?: number
}

export interface ISubstationDetailDialogCloseResult {
    saved?: boolean;
    canceled?: boolean;
}
