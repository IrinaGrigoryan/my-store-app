import axios from 'axios';

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  timeout: 1000,
  headers: {
    // Put your access key here
    'X-Api-Key': 'j8KoIy8TSdj7wZqyES99ngeg9BVV4EKDSH_r14DJ1qA'
  },
  validateStatus (status) {
    return status >= 200 && status < 500
  }
})
