import axios from 'axios';
import { State, TodoInfo } from '../store/modules/code/state';

const API_URL = 'https://localhost:55526/graphql';

export default {
  async TODO_LIST(): Promise<T> {
    const res = await axios.post(API_URL, {
      query: `query{
        getCodesPaging(First: 0 Offset: 10){
          totalCount
          resultsList{
            No
            CorpId{
              No
              CorpName
              Description
            }
            CodeId
            UpCodeId{
              No
              CodeId
              CodeName
              Description
            }
            CodeName
            Description
            CreatedDate
            ModifiedDate
            
          }
        }
      }`,
    });
    console.log(res);
  },
  
};