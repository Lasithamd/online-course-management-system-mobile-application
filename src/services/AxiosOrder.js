import axios from 'axios';

// Adjust the baseURL depending on the platform
const baseURL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL, // Replace with your API's base URL
  timeout: 10000, // Set a request timeout (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // You can add more headers here if needed (e.g., authorization headers)
  },
});

// You can also add interceptors to handle requests/responses globally
axiosInstance.interceptors.request.use(
  config => {
    // Perform some logic before the request is sent, e.g., adding a token
    // config.headers.Authorization = `Bearer ${your_token}`;
    return config;
  },
  error => {
    // Handle the error before it's sent
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    // Any status code that falls within the range of 2xx causes this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Handle errors globally (e.g., log out the user if a 401 Unauthorized occurs)
    if (error.response && error.response.status === 401) {
      // Perform some action, e.g., redirecting to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
