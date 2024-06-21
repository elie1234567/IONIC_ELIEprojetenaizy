import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', 
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  // CRUD methods
  getCruds() {
    return apiClient.get('/v1/crud');
  },
  getCrud(id) {
    return apiClient.get(`/v1/crud/${id}`);
  },
  createCrud(crud) {
    return apiClient.post('/v1/crud', crud);
  },
  updateCrud(id, crud) {
    return apiClient.put(`/v1/crud/${id}`, crud);
  },
  deleteCrud(id) {
    return apiClient.delete(`/v1/crud/${id}`);
  },
  
};
