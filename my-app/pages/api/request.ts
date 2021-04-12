import axios, { Method } from 'axios';
// import ENDPOINT from '../config';
// import AsyncStorageModule from '../common/modules/asyncStorageModule';

const SIZL = {
  request: async (method: Method, api: string) => {
    return await axios({
      url: `http://localhost:3000${api}`,
      method,
      timeout: 5000,
    }).catch((error) => {
      console.log(
        `http://localhost:3000${api}에서 에러가 발생했습니다.`,
        error
      );
      return false;
    });
  },
};

export default SIZL;
