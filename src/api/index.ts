import axios from 'axios';
import type { ISignInUser, ISignUpUser } from '@/types';

const API = axios.create({
  baseURL: 'http://localhost:8080'
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') as string)
      ?.token}`;
  }
  return req;
});

export const signIn = (formData: ISignInUser) => API.post('/user/signin', formData);
export const signUp = (formData: ISignUpUser) => API.post('/user/signup', formData);
