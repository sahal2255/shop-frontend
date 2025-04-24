import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:7002/api', 
  withCredentials: true, 
 
});
