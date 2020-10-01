import axios from 'axios';
import { State, CodeInfo } from '../store/modules/code/type';

const API_URL = 'http://localhost:5678/graphql';

export default {

  async CODE_LIST(): Promise<any> {
    const res = await axios.post(API_URL, {
      query: `query{
        getCodesPaging( Search : { UpCodeNo : null} ){
          totalCount
          resultsList{
            No
            CodeId
            CodeName
            Description
            UpCodeNo{
              No
              CodeId
              CodeName
              Description
            }
            CreatedDate
          }
        }
      }`,
    });
    const resultsList = res.data.data.getCodesPaging.resultsList;
    const totalCount = res.data.data.getCodesPaging.totalCount;
    const listData = { resultsList, totalCount };
    return listData;
  },
  
};