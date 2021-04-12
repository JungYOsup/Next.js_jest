import SIZL from '../request';

const _API_HOME_LIST_ = async () => {
  const api = '/api/dummyAPI/home';

  const response = await SIZL.request('GET', api);

  const { data }: any = response;

  return data;
};

export default _API_HOME_LIST_;
