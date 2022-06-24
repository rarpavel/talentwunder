import Axios from 'axios';

const http = Axios.create();

http.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err) {
        return Promise.reject({
          message: err,
        });
      }
      if (err.response.status === 401) {
        // some functionality
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(err);
    },
  );
  
  export default http;