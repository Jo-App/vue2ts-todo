//import { CodeInfo, State } from './type';

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


const state: State = {
  codeList: [],
  codeInfo: {
    No: 0,
    CodeId: '',
    CodeName: '',
    Description: '',
    UpCodeNo: '',
    CreatedDate: '',
  },
};
export default state;