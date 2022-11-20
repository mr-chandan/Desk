import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

export const search = (data) => api.post('/api/find', data); 
export const add = (data) => api.post('/api/add', data);
export const del = (data) => api.post('/api/del', data);
export const upd = (data) => api.post('/api/upd', data);