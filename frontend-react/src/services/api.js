import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// User-related API calls
export const userService = {
  getUsers: () => api.get('/users'),
  getUserById: (id) => api.get(`/users/${id}`),
  // Add more user-related API calls as needed
};

// You can add more service categories here
// export const postService = { ... }

export default api;
