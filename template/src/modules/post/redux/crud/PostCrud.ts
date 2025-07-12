import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getInstance = async (url: string) => {
  return axios.create({
    baseURL: url,
  });
};

export const getPostListCrud = () => {
  // If we need alter any url or headers, we can use below instance
  // const instance = await getInstance('any url if needed');
  // return instance.get('/posts', payload);
  return axios.get('/posts');
};
