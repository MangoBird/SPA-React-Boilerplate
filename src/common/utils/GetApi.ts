import Axios from 'axios';

export const getApi = () => {
  return Axios.create({
    baseURL:
      // 'http://localhost:3319/api/v1'
      'http://ec2-52-79-179-57.ap-northeast-2.compute.amazonaws.com:3340/api/v1'
  });
};
