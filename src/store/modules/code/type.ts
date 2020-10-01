export interface CodeInfo {
  No: number;
  CodeId: string;
  CodeName: string;
  Description: string;
  UpCodeNo: any;
  CreatedDate: string;
} 

export interface State {
  codeList: CodeInfo[];
  codeInfo: CodeInfo;
}
