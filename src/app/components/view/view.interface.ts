// view.interface.ts
export interface TileData {
  ReqId: number;
  JobTitle: string;
  CreatedBy: string;
  CreatedDate: string; // If the JSON contains date as string
  DeptId: number;
  Status: string;
}