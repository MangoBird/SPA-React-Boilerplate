import axios from 'axios';

export const mockOrderApiCall = (productId: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 1000);
  });
};
