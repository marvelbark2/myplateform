import axios from 'axios';

axios.interceptors.request.use(
    config => {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      };
    },
    error => Promise.reject(error)
  );
  
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default axios;